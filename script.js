
const tripForm = document.getElementById("tripForm");
const result = document.getElementById("result");

const experiences = {
    Nature: [
        ["Coorg", "Visit coffee plantations, enjoy nature walks and explore Abbey Falls."],
        ["Chikkamagaluru", "Discover scenic hills, viewpoints and coffee estates."],
        ["Nandi Hills", "Enjoy sunrise views and beautiful mountain scenery."]
    ],

    History: [
        ["Mysuru", "Explore Mysore Palace and the city's royal heritage."],
        ["Hampi", "Discover ancient temples and the ruins of the Vijayanagara Empire."],
        ["Badami", "Explore historic cave temples and rock-cut architecture."]
    ],

    Adventure: [
        ["Chikkamagaluru", "Enjoy trekking and scenic mountain viewpoints."],
        ["Coorg", "Explore forest trails and outdoor activities."],
        ["Dandeli", "Consider river rafting and nature activities when available."]
    ],

    Beaches: [
        ["Gokarna", "Explore Om Beach and enjoy a relaxing coastal walk."],
        ["Udupi", "Visit Malpe Beach and enjoy coastal food."],
        ["Murudeshwar", "See the famous Shiva statue and enjoy sea views."]
    ],

    Culture: [
        ["Mysuru", "Visit Mysore Palace and experience Karnataka's traditions."],
        ["Hampi", "Explore historic monuments and temples."],
        ["Belur", "Discover the beautiful architecture of Chennakeshava Temple."]
    ],

    Food: [
        ["Bengaluru", "Try dosa, idli, filter coffee and local restaurants."],
        ["Mysuru", "Taste Mysore masala dosa and Mysore Pak."],
        ["Udupi", "Enjoy traditional Udupi vegetarian cuisine."]
    ]
};

tripForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const traveler = document.getElementById("traveler").value;
    const days = Number(document.getElementById("days").value);
    const budget = Number(document.getElementById("budget").value);
    const interest = document.getElementById("interest").value;
    const start = document.getElementById("start").value;

    if (!Number.isInteger(days) || days < 1 || days > 30) {
        alert("Please enter a trip duration between 1 and 30 days.");
        return;
    }

    if (!Number.isFinite(budget) || budget < 500) {
        alert("Please enter a valid budget of at least ₹500.");
        return;
    }

    const places = experiences[interest];
    const dailyBudget = Math.floor(budget / days);

    let itinerary = "";

    for (let i = 0; i < days; i++) {
        const place = places[i % places.length];

        itinerary += `
            <div class="trip-day">
                <h4>Day ${i + 1}: ${place[0]}</h4>
                <p>${place[1]}</p>
            </div>
        `;
    }

    result.innerHTML = `
        <div class="result-card">
            <p class="tag">✦ YOUR PERSONALIZED JOURNEY</p>

            <h3>🎉 Your Karnataka Trip Is Ready!</h3>

            <p>
                Starting city: <strong>${start}</strong><br>
                Traveller type: <strong>${traveler}</strong><br>
                Duration: <strong>${days} days</strong><br>
                Experience: <strong>${interest}</strong>
            </p>

            <br>
            <h3>Your Suggested Itinerary</h3>

            ${itinerary}

            <div class="budget-info">
                <strong>💰 Budget Planner</strong><br>
                Total budget: ₹${budget.toLocaleString("en-IN")}<br>
                Average daily budget: ₹${dailyBudget.toLocaleString("en-IN")}<br>
                <small>
                    Indicative planning figures only. Actual costs depend
                    on transport, accommodation, food and activities.
                </small>
            </div>

            <p style="margin-top:20px;font-size:13px;color:#718078;">
                Note: This is a demo-generated itinerary. Please verify
                travel distances, opening hours, availability and prices
                before travelling.
            </p>
        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
