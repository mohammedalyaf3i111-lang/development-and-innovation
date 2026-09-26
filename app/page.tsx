import { Landing } from '../components/landing';
export default function Page(){return <Landing deliveryEnabled={Boolean(process.env.AISO_INQUIRY_WEBHOOK_URL)} />;}
