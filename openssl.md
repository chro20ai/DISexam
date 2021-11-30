openssl genrsa -out client-key.pem
openssl req -new -key client-key.pem -out csr.pem 
openssl x509 -req -days 365 -in csr.pem -signkey client-key.pem -out client-cert.pem
