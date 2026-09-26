import {NextRequest,NextResponse} from 'next/server';
import {inquirySchema} from '../../../lib/inquiry-schema';
export async function POST(request:NextRequest){
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return NextResponse.json({error:'JSON required.'},{status:415});
 const reader=request.body?.getReader();if(!reader)return NextResponse.json({error:'Missing inquiry.'},{status:400});
 let body='';let bytes=0;const decoder=new TextDecoder();
 while(true){const{done,value}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>24000){await reader.cancel();return NextResponse.json({error:'Inquiry is too large.'},{status:413});}body+=decoder.decode(value,{stream:true});}body+=decoder.decode();
 let data;try{data=inquirySchema.safeParse(JSON.parse(body));}catch{return NextResponse.json({error:'Invalid inquiry.'},{status:400});}
 if(!data.success)return NextResponse.json({error:'Check the required fields and include at least 20 characters in your message.'},{status:400});
 const endpoint=process.env.AISO_INQUIRY_WEBHOOK_URL;
 if(!endpoint)return NextResponse.json({error:'Online inquiry delivery is not connected yet. Your inquiry has not been sent. Download a copy below.'},{status:503});
 try{if(new URL(endpoint).protocol!=='https:')throw new Error('HTTPS required');const{website,...inquiry}=data.data;void website;
 const response=await fetch(endpoint,{method:'POST',redirect:'error',headers:{'Content-Type':'application/json',...(process.env.AISO_INQUIRY_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.AISO_INQUIRY_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify(inquiry),signal:AbortSignal.timeout(10000),cache:'no-store'});
 if(!response.ok)throw new Error('Delivery failed');return NextResponse.json({message:'Your inquiry has been submitted. Thank you for connecting with AISO.'});
 }catch{return NextResponse.json({error:'We could not deliver your inquiry. Please try again or download a copy.'},{status:502});}
}
