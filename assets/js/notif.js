const Notify = (() => {

    let ready = null;

    async function init() {
        if (!("serviceWorker" in navigator)) {
            throw new Error("Service Worker tidak didukung");
        }

        if (!ready) {
            await navigator.serviceWorker.register("/sw.js");
            ready = navigator.serviceWorker.ready;
        }

        return ready;
    }

    const TAGS = [
        "Xyraa Official",
        "Xyraa Message",
        "Xyraa Service"
    ];

    function randomTag() {
        return TAGS[Math.floor(Math.random() * TAGS.length)];
    }

    const CONFIG = {
        title: document.title || "Notification",
        icon: "/icon.png",
        badge: "/icon.png",
        vibrate: [200, 100, 200]
    };

    async function sendNotification(text, options = {}) {

        if (!text) {
            throw new Error("Text notification tidak boleh kosong");
        }

        if (!("Notification" in window)) {
            throw new Error("Browser tidak mendukung Notification API");
        }

        if (Notification.permission !== "granted") {
            const permission =
                await Notification.requestPermission();

            if (permission !== "granted") {
                return false;
            }
        }

        const reg = await init();

        await reg.showNotification(
            options.title || CONFIG.title, {
                body: text,

                icon: options.icon ||
                    CONFIG.icon,

                badge: options.badge ||
                    CONFIG.badge,

                tag: options.tag ||
                    randomTag(),

                vibrate: options.vibrate ||
                    CONFIG.vibrate,

                requireInteraction: options.requireInteraction ?? false,

                renotify: options.renotify ?? true,

                silent: options.silent ?? false,

                timestamp: options.timestamp ||
                    Date.now()
            }
        );

        return true;
    }

    return {

        Send(text, options = {}) {
            return sendNotification(text, options);
        },

        SendAll(text, options = {}) {
            return sendNotification(text, options);
        },

        Auto(text, options = {}) {
            return sendNotification(text, options);
        }
    };
})();
window.Notify = Notify;
