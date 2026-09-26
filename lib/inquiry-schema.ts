import {z} from 'zod';
import {industries,projectTypes} from './data';
export const inquirySchema=z.object({fullName:z.string().trim().min(2).max(120),company:z.string().trim().max(160),country:z.string().trim().min(2).max(100),phone:z.string().trim().max(40),email:z.email().max(254),industry:z.enum(['Other',...industries]),projectType:z.enum(projectTypes),message:z.string().trim().min(20).max(5000),website:z.string().max(0)});

