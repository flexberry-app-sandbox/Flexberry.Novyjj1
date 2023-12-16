docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novyjj1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t novyjj1-java/app ../../..
