import React from "react";
import privacyPolicy from "../../content/privacy-policy";
import "./privacy-policy-container.scss";

const PrivacyPolicyContainer = () => (
  <div className="privacy-policy-container">
    <div className="privacy-policy-container__title">
      Privacy Policy for {privacyPolicy.companyWebsite}
    </div>
    {privacyPolicy.policy.map((policyLine, index) => {
      if (policyLine.isBold) {
        return (
          <div className="privacy-policy-container__heading" key={index}>
            {policyLine.text}
          </div>
        );
      }
      return (
        <div className="privacy-policy-container__content" key={index}>
          {policyLine.text}
        </div>
      );
    })}
  </div>
);

export default PrivacyPolicyContainer;
