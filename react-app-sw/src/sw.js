self.addEventListener("install", function (event) {
    event.waitUntil(logData());
});

const logData = () => {
    setInterval(() => {
        console.log("i am in service worker");
    }, 2000);
};
