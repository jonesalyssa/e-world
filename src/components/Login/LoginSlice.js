import { api } from "../../app/api";

const loginApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:({username, password}) => ({
                url: "/auth/login",
                method:"POST",
                body:{
                    username,
                    password,
                },
            }),
            invalidatesTags: ["Swag", "User"],
            transformResponse: (response) => response,
        }),
    }),
});

export const {useLoginMutation} = loginApi