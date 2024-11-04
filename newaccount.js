document.addEventListener("DOMContentLoaded", function () {
    const clinicLocationLabel = document.querySelector(
        "label[for='ctl01_TemplateBody_WebPartManager1_gwpciCreateNewAccountForm_ciCreateNewAccountForm_FB_DropDown_CsContact_Chapter']"
    );

    if (clinicLocationLabel) {
        // If using jQuery UI for tooltips, set the title attribute
        clinicLocationLabel.setAttribute(
            "title",
            "Select the county of your primary clinic, residency/fellowship, or study."
        );
        clinicLocationLabel.style.cursor = "help"; // Change cursor to indicate tooltip

        if (clinicLocationLabel) {
            // Add CSS classes for dotted underline and tooltip styling
            clinicLocationLabel.classList.add("tooltip-container");
        }

        // If jQuery is available, initialize the tooltip
        if (window.jQuery) {
            $(clinicLocationLabel).tooltip({
                position: { my: "left+15 center", at: "right center" },
                tooltipClass: "custom-tooltip",
            });
        } else {
            // If jQuery UI is not available, add a custom tooltip element
            clinicLocationLabel.classList.add("tooltip-container");
            clinicLocationLabel.insertAdjacentHTML(
                "beforeend",
                "<span class='tooltiptext'>List the county of your primary clinic, residency/fellowship, or study.</span>"
            );
        }
    }
});
