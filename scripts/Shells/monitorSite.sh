
curl -sLk -w "%{http_code}\\n" $1 --connect-timeout 30 -o /dev/null