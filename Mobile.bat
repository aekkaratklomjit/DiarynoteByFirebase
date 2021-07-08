adb -s 9c8e81bc reverse tcp:8081 tcp:8081
react-native start

adb -s PFUWVSIFU8ONRO9L reverse tcp:8081 tcp:8081
react-native start


cd android && ./gradlew clean
./gradlew assembleDebug --stacktrace
gradlew assembleRelease