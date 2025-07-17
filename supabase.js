const SUPABASE_URL = 'https://kglcmilofvbjjgcctbxd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbGNtaWxvZnZiampnY2N0YnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MzM5OTMsImV4cCI6MjA2NjIwOTk5M30.IDfhNc2YVU0PSrFd0FFCQQNn9rI_CRSvDbtDRoUtd3Y'; // Reemplaza con tu clave real

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;