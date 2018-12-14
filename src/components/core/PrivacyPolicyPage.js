import React from 'react';
import { privacyPolicy } from 'Content/privacyPolicy';


const PrivacyPolicyPage = () => (
    <div id='privacy_policy_page'>
        <h3>Privacy Policy for {privacyPolicy.companyWebsite}</h3>
        {privacyPolicy.policy.map((policyLine, index) => {
            if (policyLine.isBold) {
                return <h4 key={index}>{policyLine.text}</h4>;
            }
            return <p key={index}>{policyLine.text}</p>;
        })}
    </div>
);

export default PrivacyPolicyPage;
