/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin1-lti",
        editProfile: "B2C_1_profileediting1-lti"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://lauratamburinissg.b2clogin.com/lauratamburinissg.onmicrosoft.com/B2C_1_signupsignin1-lti",
        },
        editProfile: {
            authority: "https://lauratamburinissg.b2clogin.com/lauratamburinissg.onmicrosoft.com/B2C_1_profileediting1-lti"
        }
    },
    authorityDomain: "lauratamburinissg.b2clogin.com"
}
