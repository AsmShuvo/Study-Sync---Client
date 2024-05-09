import React from "react";

const CreateAssignment = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const mark = form.mark.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const deadline = form.deadline.value;
    console.log(title, difficulty, mark, details, deadline, photo);
  };
  return (
    <div className="min-h-screen my-10">
      <div className="m-8 bg-deep border-2 border-[#9753536b] rounded-xl shadow-2xl">
        <div>
          <form className="card-body" onSubmit={handlePost}>
            <div className="space-y-2  ">
              <p className="text-green-500">Create Assignment</p>
              <p className="text-green-500">
                This information will be displayed publicly so be carefull and
                honest while sharing
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Assignment Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Example: Laws of motion"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Thumbnail Image URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Place URL here"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Marks</span>
              </label>
              <input
                type="text"
                name="mark"
                placeholder="Total marks here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Deadline</span>
              </label>
              <input
                type="text"
                name="deadline"
                placeholder="Due Date here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className=" ">
              <label className="label">
                <span className="label-text text-lg">Details/Question</span>
              </label>
              <textarea
                placeholder="details"
                name="details"
                className="textarea textarea-bordered textarea-md w-full h-64"
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <hr />

            <div>
              <button type="submit" className="btn btn-wide bg-red text-white">
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
