import {ce} from "../Utils/create-element.js";

export default function wel1() {
    const wel1 = ce("div", {
        restAttrs: {id: "unboarding-page-1"},
        className: "relative  w-full h-full flex flex-col justify-end z-30 after:absolute after:z-10 after:inset-0 after:bg-[url('./src/assets/image/background-onboarding-page-1.jpeg')]  after:bg-cover after:left-[-181px] after:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black/80 before:z-20 before:pointer-events-none",
        children: [ce("div",
            {
                className: "typoGraph z-40 w-full px-8 py-20 ",
                children: [
                    ce("h1", {
                        innerText: "Welcome to 👋",
                        className: "w-full text-white font-semibold text-4xl"
                    }),
                    ce("h1", {
                        innerText: "Shoea",
                        className: "w-full text-white font-bold text-7xl pb-7 pt-4 "
                    }), ce("p", {
                        innerText: "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
                        className: "w-full text-white font-semibold text-base "
                    }),

                ]
            }
        )]
    });

    return wel1;
}