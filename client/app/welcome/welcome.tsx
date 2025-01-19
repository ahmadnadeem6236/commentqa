export function Welcome() {
  return (
    <section className="w-svw h-svh">
      <div className="flex justify-center items-center gap-10 h-full max-w-lg md:max-w-2xl mx-auto">
        <div className="md:w-96 hidden md:flex  bg-slate-50">Banner</div>
        <div className="w-80 h-96  ">
          <div className="w-full h-80 mb-4 flex justify-center  border-[1px] rounded-md">
            <div className="flex flex-col gap-5 items-center pt-10">
              <h1 className="font-bold text-3xl">CommentQA</h1>
              <form className="flex flex-col gap-3">
                <input
                  className="w-full h-10 bg-slate-300 border-[1px]"
                  placeholder="username"
                />
                <input className="w-full h-10" placeholder="password" />
                <button>Login</button>
              </form>
            </div>
          </div>
          <div className="w-full h-12 border-[1px] rounded-md">sign up</div>
        </div>
      </div>
    </section>
  );
}
