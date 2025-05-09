import Image from "next/image";
import Link from "next/link";

export default function TaxPage() {
    return (
        <section className="mx-auto max-w-[1400px] px-4 py-8 w-full">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Tax</h1>
            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex gap-4 items-center">
                    <div className="image">
                        <Image
                            src="tax.svg"
                            alt="Recurring Expenses"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="content">
                        <h2 className="text-xl font-bold text-primary mb-2">Let's keep working on your taxes</h2>
                        <p>Please review and complete the sections listed below.</p>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex-4/5 bg-white shadow p-5 h-max">
                    <div className="flex gap-4 justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-primary">Tax Profile</h2>
                            <p className="font-semibold text-[#b11107]"><span className="font-bold">Incomplete.</span> Please complete by <span className="font-bold">31 Jan 2025</span></p>
                        </div>
                        <button className="bg-primary h-max text-white px-3 py-1.5 hover:bg-dark-primary hover:text-white transition-all duration-200">
                            Continue Working
                        </button>
                    </div>
                </div>
                <div className="flex-1/5 bg-white shadow p-5 h-max">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-primary">Contact Info</h2>
                        <p className="text-xs text-gray-600">Current</p>
                    </div>
                    <hr className="my-3 opacity-10" />
                    <div className="flex flex-col gap-2 leading-4">
                        <p className="text-gray-700 mb-0">Entity Name</p>
                        <p className="font-bold mb-4">C Corpration</p>
                        <p className="text-gray-700 mb-0">Finacal year start</p>
                        <p className="font-bold mb-4">January</p>
                        <Link href="#" className="text-primary font-medium">Request Changes</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
