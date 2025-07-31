const userData = {
  steps: 8200,       
  calories: 480,    
  workout: 45        
};

// Maximum goals for calculation
const goals = {
  steps: 10000,
  calories: 600,
  workout: 60
};

document.addEventListener("DOMContentLoaded", () => {
  // Update numbers on cards
  document.getElementById("steps").textContent = userData.steps;
  document.getElementById("calories").textContent = `${userData.calories} kcal`;
  document.getElementById("workout").textContent = `${userData.workout} mins`;

  // Fill progress bars based on values
  document.getElementById("stepsBar").style.width = `${(userData.steps / goals.steps) * 100}%`;
  document.getElementById("caloriesBar").style.width = `${(userData.calories / goals.calories) * 100}%`;
  document.getElementById("workoutBar").style.width = `${(userData.workout / goals.workout) * 100}%`;
});
