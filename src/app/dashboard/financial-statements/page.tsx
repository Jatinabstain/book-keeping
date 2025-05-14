import ReportTabs from "@/components/Tabs";
import ProfitLossTable from "@/components/ProfitLossTable";

export default function FinancialStatements() {
    return ( 
        <section className="mx-auto lg:max-w-[1400px] max-w-lvh  px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-4">Financial Statements</h1>
            <ReportTabs />
            
            <div className="bg-white p-4 mb-5 shadow">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Profit & Loss</h2>
                    {/* <button className="bg-primary text-white px-3 py-1.5 hover:bg-dark-primary">Apply Now</button> */}
                </div>
                <hr className="opacity-20" />
                
                <ProfitLossTable />

            </div>
        </section>
     );
}