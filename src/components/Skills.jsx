export default function Contact() {
  let skills = [
    {
      name: "JS",
      image: "../../public/js.png",
    },
    {
      name: "Vue",
      image: "../../public/vue.png",
    },
    {
      name: "Quasar",
      image: "../../public/Quasar.png",
    },
    {
      name: "React",
      image: "../../public/react.png",
    },
    {
      name: "HTML",
      image: "../../public/html.png",
    },
    {
      name: "CSS",
      image: "../../public/css.png",
    },
    {
      name: "Tailwind",
      image: "../../public/Tailwind.png",
    },
    {
      name: "Bootstrap",
      image: "../../public/Bootstrap.png",
    },

    {
      name: "Python",
      image: "../../public/python.png",
    },
    {
      name: "Flask",
      image: "../../public/Flask.png",
    },
    {
      name: "Docker",
      image: "../../public/docker.png",
    },
    {
      name: "MongoDB",
      image: "../../public/MongoDB.png",
    },
    {
      name: "MySql",
      image: "../../public/sql.png",
    },
    {
      name: "Postgre SQL",
      image: "../../public/postgre.png",
    },
    {
      name: "AWS",
      image: "../../public/aws.png",
    },

    {
      name: "Git Version Control",
      image: "../../public/git.png",
    },
  ];

  return (
    <div>
      <div class="xl:tw-px-20 2xl:tw-px-20 tw-pt-20">
        <div class="tw-pb-10">
          <div class="tw-text-app_text_dark tw-flex tw-justify-center tw-text-3xl xl:tw-text-4xl 2xl:tw-text:5xl tw-font-bold">
            Skills
          </div>
        </div>
        <div class="tw-text-base tw-text-app_text_light tw-font-medium xl:tw-text-lg 2xl:tw-text:md tw-my-5"></div>
        <div className="tw-flex tw-flex-wrap tw-justify-center">
          {skills.map((number) => (
            <div className="tw-h-[25vh] tw-w-[25vh] tw-m-4 tw-shadow-xl   tw-bg-[#fff] tw-bg-opacity-20 tw-rounded-md tw-text-white tw-flex tw-justify-center tw-items-center">
              <div className="tw-text-center ">
                <div className="tw-flex tw-justify-center">
                  <img className="tw-h-[4rem]" src={number.image} alt="" />
                </div>
                <div className="tw-pt-2  tw-font-medium tw-text-lg xl:tw-text-lg 2xl:tw-text:xl">
                  {number.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
