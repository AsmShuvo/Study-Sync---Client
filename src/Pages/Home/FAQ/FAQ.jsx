import React from "react";

const FAQ = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto mt-32">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-normal text-rose-300">
            How can StudySync help me with my studies?
          </div>
          <div className="collapse-content">
            <p className="tracking-wider text-lg">
              StudySync offers interactive learning experiences, study
              resources, expert guidance, and collaborative study features to
              support your academic journey. Whether you need help with
              homework, exam preparation, or skill development, we're here to
              assist you every step of the way.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-font-semibold text-rose-300">
            Are the resources on StudySync free to access?
          </div>
          <div className="collapse-content">
            <p className="tracking-wider text-lg">
              Yes, all of the resources on StudySync are available for free
              access. However, we also offer premium features and services for
              users who require additional support or advanced functionality.
              You can explore our subscription options for more information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-font-semibold text-rose-300">
            How do I join a study group or collaborate with peers on StudySync?
          </div>
          <div className="collapse-content">
            <p className="tracking-wider text-lg">
              To join a study group or collaborate with peers on StudySync,
              simply create an account and explore our community features. You
              can join existing study groups, create your own groups,
              participate in discussions, share study materials, and connect
              with fellow learners who share your interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
