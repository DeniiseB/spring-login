# clear dist folder for clean build
rm -r ./dist

# create dist folder in backend
mkdir -p ./dist/src/main/resources/static

# build jar file with maven
mvn clean package

# move jar file to dist folder
mv ./target/spring-login-0.0.1.jar ./dist/

# build frontend
cd ../frontend
npm run build

# move frontend build to static folder
mv ./dist/* ../backend/dist/src/main/resources/static

# create script to run jar file
echo java -jar spring-login-0.0.1.jar > ./dist/run.bat

