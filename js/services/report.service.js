const ReportService = {

    async save(data){

        return await api(

            "saveReport",

            data

        );

    }

};
