import ReportTabs from "@/components/Tabs";

export default function FinancialStatements() {
    return ( 
        <section className="mx-auto max-w-[1200px] px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-4">Financial Statements</h1>
            <ReportTabs />
        </section>
     );
}