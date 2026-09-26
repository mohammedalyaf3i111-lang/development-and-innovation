export type Status = 'Available' | 'Under Development' | 'R&D Project' | 'Custom Development';
export type Product = { name: string; purpose: string; category: string; status: Status; packaging?: string };
const group = (category: string, entries: [string,string][]): Product[] => entries.map(([name,purpose]) => ({name,purpose,category,status:'Custom Development'}));
export const products: Product[] = [
...group('Rhodium systems',[
['White Rhodium Concentrate','Concentrate development for professional white rhodium plating systems.'],
['White Rhodium Plating Bath','White rhodium finishing chemistry tailored to jewelry applications.'],
['Rhodium Replenisher','Replenishment informed by bath analysis and operating needs.'],
['Rhodium Bath Makeup Solution','Supporting chemistry for preparation of a rhodium bath.'],
['Rhodium Bath Maintenance Additive','Targeted bath maintenance based on technical evaluation.'],
['Black Rhodium System','Dark decorative finishing concepts for precious-metal surfaces.'],
['Rhodium Pen Plating Solution','Localized finishing chemistry for suitable jewelry applications.']]),
...group('Surface preparation',[
['Jewelry Pre-Cleaner','Surface cleaning before subsequent workshop operations.'],
['Ultrasonic Jewelry Cleaner','Jewelry cleaning chemicals developed for ultrasonic equipment.'],
['Electrolytic Degreaser','Electrolytic surface preparation before plating.'],
['Plating Activator','Activation tailored to the substrate and plating system.'],
['Post-Solder Cleaning Solution','Cleaning of suitable jewelry surfaces after soldering.'],
['Gold Color Restoration Solution','Surface appearance restoration. Does not change karat or fundamentally change alloy composition.']]),
...group('Precious metal finishing',[
['Gold Electroplating Solution','Gold plating chemistry tailored to the intended finish.'],
['Jewelry Brightening Solution','Surface brightening concepts for compatible jewelry materials.'],
['Post-Plating Protection','Protective finishing development for plated surfaces.'],
['Stainless Steel Burnishing Solution','Process chemistry for stainless steel burnishing media.']])];
products[0].packaging = 'Packaging concept: 100 mL | 2 g Rh';
export const categories = ['Rhodium systems','Surface preparation','Precious metal finishing'];
export const divisions = [
['Jewelry & Precious Metal Solutions','Specialized chemistry, finishing and bath care for the modern workshop.'],
['Industrial Chemical Development','Purpose-built formulations around real industrial requirements.'],
['Automotive & Workshop Chemistry','Application-led cleaning and maintenance product development.'],
['Equipment & Process Innovation','Connecting chemistry, equipment and practical process design.'],
['Private Label Development','Product concepts shaped around your brand and market needs.'],
['Contract R&D','Focused research for a defined technical challenge.']];
export const industries = ['Jewelry Manufacturers','Gold Workshops','Plating Workshops','Precious Metal Refiners','Industrial Manufacturers','Automotive Workshops','Chemical Distributors','Private Label Brands'];
export const projectTypes = ['Product Development','Jewelry Workshop Solution','Rhodium Solution','Precious Metal Recovery','Industrial Chemical','Private Label','Equipment Development','Distribution','Investment / Partnership','Other'];
export const capabilities = ['Chemical Formulation','Process Development','Product Testing','Reverse Engineering','Raw Material Evaluation','Performance Optimization','Pilot Production','Packaging Development','Industrial Problem Solving'];
export const stages = ['Define the Problem','Technical Research','Prototype Development','Laboratory Evaluation','Field Testing','Product Optimization','Production Preparation','Commercial Launch'];
export const pipeline = ['Rhodium Bath Regeneration','Compact Rhodium Analyzer','Precious Metal Recovery','Advanced Jewelry Cleaning','Specialized Plating Chemistry','Workshop Filtration Systems'];
export const whatsappNumber = process.env.NEXT_PUBLIC_AISO_WHATSAPP_NUMBER?.replace(/\D/g,'') || null;
