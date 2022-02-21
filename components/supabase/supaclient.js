import { createClient } from "@supabase/supabase-js";

// retrieving environment variables
const supabaseUrl = "https://kfmgugdxziqikemkyayi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmbWd1Z2R4emlxaWtlbWt5YXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4MjY5MDIsImV4cCI6MTk2MDQwMjkwMn0.2rZOQz-aiL8macAdH3T71WBMRs5rcApJMWWfSpeSJj8";
<<<<<<< HEAD

export const supabase = createClient(supabaseUrl, supabaseKey);
=======
const options = {
  schema: "public",
  headers: { "x-my-custom-header": "homeastro" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};
export const supabase = createClient(supabaseUrl, supabaseKey, options);
>>>>>>> d608bdd0a7c4385223eec99dd76a389ed3a3c939
