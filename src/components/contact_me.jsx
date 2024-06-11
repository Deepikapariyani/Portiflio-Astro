import emailjs from '@emailjs/browser';

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault()
        // alert("submitted")
        emailjs.sendForm('service_gawr5dd','template_pc3nd5x',e.target,'bOVkQ8iPOxjb77YbM')
    }
    return (
        <div>
            <div class="tw-max-w-screen-md tw-mx-auto tw-p-5">
                <div class="tw-text-center tw-mb-16">
                    <p class="tw-mt-4 tw-text-sm tw-leading-7 tw-text-gray-500 font-regular tw-uppercase">
                        Contact
                    </p>
                    <h3 class="tw-text-3xl sm:tw-text-4xl tw-leading-normal tw-font-extrabold tw-tracking-tight tw-text-gray-900">
                        Get In <span class="tw-text-indigo-600">Touch</span>
                    </h3>
                </div>

                <form class="tw-w-full" onSubmit={sendEmail}>
                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full tw-px-3 tw-mb-6 md:tw-mb-0">
                            <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="from_name">
                                Full Name
                            </label>
                            <input class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-red-500 tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p class="tw-text-red-500 tw-text-xs tw-italic">Please fill out this field.</p>
                        </div>
                    
                    </div>
                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full tw-px-3">
                            <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="email_from">
                                Email Address
                            </label>
                            <input class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                        </div>
                    </div>

                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full tw-px-3">
                            <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="message">
                                Your Message
                            </label>
                            <textarea rows="10" class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500">

                            </textarea>
                        </div>
                        <div class="tw-flex tw-justify-between tw-w-full tw-px-3">
                            <div class="md:tw-flex md:tw-items-center">
                                <label class="tw-block tw-text-gray-500 tw-font-bold">
                                    <input class="tw-mr-2 tw-leading-tight" type="checkbox" />
                                    <span class="tw-text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button class="tw-shadow tw-bg-indigo-600 hover:tw-bg-indigo-400 focus:tw-shadow-outline focus:tw-outline-none tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded" type="submit">
                                Send Message
                            </button>
                        </div>

                    </div>

                </form>
            </div>


        </div>
    );
}
