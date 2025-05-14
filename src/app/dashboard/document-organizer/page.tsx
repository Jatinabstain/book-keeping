import DocumentForm from "@/components/DocumentForm";
import DocumentList from "@/components/DocumentList";
import DocumentTable from "@/components/DocumentTable";

export default function DocumentOrganizer() {
    return ( 
        <section className="mx-auto lg:max-w-[1400px] max-w-lvw px-[15px] w-full pt-8">
            <h1 className="text-xl font-semibold mb-0">Document Organizer</h1>

            <div className="bg-white shadow p-6 mt-5">
                <DocumentForm />
                <DocumentTable />
            </div>
            
            <div className="bg-white shadow p-6 mt-5">
                <DocumentList />
            </div>
        </section>
     );
}