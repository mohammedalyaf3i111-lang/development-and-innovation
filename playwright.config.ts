import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',timeout:120000,use:{baseURL:'http://localhost:3100',channel:'msedge',headless:true,reducedMotion:'reduce'},workers:1,reporter:'list'});

