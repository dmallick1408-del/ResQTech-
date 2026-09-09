// ========================================
// ResQTech - Frontend Demo Logic
// ========================================

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ========================================
// Demo Flood Risk Prediction
// ========================================

function predictRisk() {

    // Get input values
    const rainfall = Number(
        document.getElementById("rainfall").value
    );

    const intensity =
        document.getElementById("intensity").value;

    const duration = Number(
        document.getElementById("duration").value
    );

    const drainage =
        document.getElementById("drainage").value;

    const waterLevel =
        document.getElementById("waterLevel").value;


    // Result area
    const result =
        document.getElementById("predictionResult");


    // Check required inputs
    if (
        !rainfall ||
        !intensity ||
        !duration ||
        !drainage ||
        !waterLevel
    ) {

        result.innerHTML = `
            <div class="result-icon">⚠️</div>

            <h3>Missing Information</h3>

            <p>
                Please enter all the required conditions
                before generating a prediction.
            </p>
        `;

        return;
    }


    // ========================================
    // DEMO SCORING
    // This is NOT the final ML model.
    // ========================================

    let score = 0;


    // Rainfall
    if (rainfall >= 100) {
        score += 3;
    }
    else if (rainfall >= 60) {
        score += 2;
    }
    else if (rainfall >= 30) {
        score += 1;
    }


    // Rainfall intensity
    if (intensity === "High") {
        score += 3;
    }
    else if (intensity === "Moderate") {
        score += 2;
    }


    // Duration
    if (duration >= 5) {
        score += 2;
    }
    else if (duration >= 3) {
        score += 1;
    }


    // Drainage
    if (drainage === "Poor") {
        score += 3;
    }
    else if (drainage === "Moderate") {
        score += 1;
    }


    // Water level
    if (waterLevel === "High") {
        score += 3;
    }
    else if (waterLevel === "Elevated") {
        score += 2;
    }


    // ========================================
    // Risk classification
    // ========================================

    let risk;
    let probability;
    let icon;


    if (score >= 10) {

        risk = "SEVERE";
        probability = "Very High";
        icon = "🔴";

    }
    else if (score >= 7) {

        risk = "HIGH";
        probability = "High";
        icon = "🟠";

    }
    else if (score >= 4) {

        risk = "MODERATE";
        probability = "Moderate";
        icon = "🟡";

    }
    else {

        risk = "LOW";
        probability = "Low";
        icon = "🟢";

    }


    // ========================================
    // Display result
    // ========================================

    result.innerHTML = `

        <div class="result-icon">
            ${icon}
        </div>

        <h3>${risk} RISK</h3>

        <p>
            Estimated risk level:
            <strong>${probability}</strong>
        </p>

        <p style="margin-top: 15px;">
            This is currently a <strong>demo rule-based
            prediction</strong>.
        </p>

        <p style="margin-top: 10px;">
            The final version will use the trained
            AI/ML model.
        </p>

    `;
}
