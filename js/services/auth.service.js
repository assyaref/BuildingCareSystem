const AuthService={

    async login(email,password){

        return await api(

            "login",

            {

                email,

                password

            }

        );

    }

};
