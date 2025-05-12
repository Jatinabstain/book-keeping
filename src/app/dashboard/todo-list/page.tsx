import TodoListTabs from "@/components/TodoListTabs";
import Link from "next/link";

export default function TodoList() {
    return (
        <section className="mx-auto max-w-[1400px] px-[15px] w-full pt-8">
            {/* task heading */}
            <h1 className="text-xl font-semibold mb-4">To-Do List</h1>
            <TodoListTabs />

            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex justify-between items-center">
                    <h2 className="text-base font-semibold text-gray-800">Have a question for your bookkeeping team?</h2>
                    <Link href="#" className="text-primary font-semibold text-sm">
                        <i className="fi fi-sr-pencil leading-0 align-middle mr-1"></i> Compress question
                    </Link>
                </div>
            </div>

            <div className="bg-white p-4 mb-5 shadow">
                <h3 className="text-base font-semibold text-gray-800 mb-4">Have you have a chance to review your <span className="text-primary">Vendor Mappings</span>?</h3>
                <div className="flex lg:flex-row flex-col gap-5 items-center mb-4">
                    <div className="flex items-center">
                        <h2 className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center flex-col text-white font-semibold">JD</h2>
                        <div>
                            <h2 className="font-bold text-primary uppercase mb-">John Doe</h2>
                            <p className="text-xs text-gray-600">2 months ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-primary text-white text-xs font-semibold mr-2 px-2.5 py-0.5">Response required</span>
                        <span className="bg-black text-white text-xs font-semibold px-2.5 py-0.5">December 2024</span>
                    </div>
                </div>

                <form>
                    <div className="w-full mb-4 border border-gray-200 bg-white">
                        <div className="px-4 py-2 bg-white">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows={3} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:outline-0" placeholder="Add a response..." required></textarea>
                        </div>
                        <div className="flex items-center justify-end1 px-3 pb-2  border-gray-200 input_btns">
                            <div className="flex ps-0 space-x-3">
                                {/* on click it's work like click on input type file */}
                                <input type="file" id="file-upload" className="hidden" />
                                <label htmlFor="file-upload" className="inline-flex justify-center items-center p-2 text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                    <i className="fi fi-sr-paperclip-vertical text-base leading-0 text-black"></i>
                                    <span className="sr-only">Attach file</span>
                                </label>
                                <button type="submit" className="inline-flex items-center py-2 px-4 font-medium text-center text-white bg-primary">Reply</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}