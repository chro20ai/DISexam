## Lidt ekstra udvidelse, som kommer til at være med i eksamen
1. Opret ny account.
2. Læs accountens balance.
3. Opdater accountens balance (hæv og indsæt).
4. Overfør penge fra en account til en anden.
5. Slet en account.

openssl genrsa -out client-key.pem
openssl req -new -key client-key.pem -out csr.pem 
openssl x509 -req -days 365 -in csr.pem -signkey client-key.pem -out client-cert.pem
