// Wait for the document to be ready
$(document).ready(function() {
  let gameOver = false
  var found = 0;
  const words = [
    "ability", "absence", "accident", "account", "act", "action", "activity", "addition", "address", "administration",
    "advantage", "advertisement", "advice", "affair", "agency", "agreement", "air", "airline", "airport", "alarm",
    "ambition", "amount", "analysis", "animal", "answer", "anxiety", "apartment", "appeal", "appearance", "application",
    "appointment", "area", "argument", "arm", "army", "arrival", "article", "artist", "aspect", "assignment",
    "assistance", "assistant", "association", "assumption", "atmosphere", "attempt", "attention", "attitude", "audience", "author",
    "authority", "award", "awareness", "back", "background", "balance", "bank", "bar", "base", "basis",
    "battle", "beauty", "beginning", "behavior", "belief", "benefit", "bill", "birth", "bit", "bite",
    "blood", "board", "body", "bone", "bonus", "book", "bottle", "bottom", "boundary", "brain",
    "branch", "break", "breath", "bridge", "brother", "budget", "building", "business", "button", "cabinet",
    "camera", "camp", "campaign", "candidate", "capital", "car", "card", "care", "career", "carpet",
    "case", "cash", "cause", "celebration", "cell", "center", "ceremony", "chance", "change", "chapter",
    "character", "charge", "charity", "check", "chemical", "chemistry", "choice", "church", "cigarette", "city",
    "class", "climate", "clock", "clothes", "cloud", "club", "coal", "coast", "coat", "code",
    "coffee", "cold", "collection", "college", "color", "combination", "comfort", "comment", "committee", "communication",
    "community", "company", "comparison", "competition", "complaint", "complex", "computer", "concept", "concern", "concert",
    "conclusion", "condition", "conference", "confidence", "confusion", "connection", "consequence", "consideration", "construction", "contact",
    "context", "contract", "contribution", "control", "conversation", "conversion", "cook", "cookie", "copy", "corner",
    "cost", "courage", "course", "court", "cousin", "coverage", "cow", "craft", "credit", "crew",
    "criticism", "culture", "currency", "customer", "cycle", "damage", "dance", "database", "date", "daughter",
    "day", "death", "debt", "decision", "definition", "degree", "delivery", "demand", "department", "departure",
    "depth", "description", "design", "desire", "desk", "development", "device", "difference", "difficulty", "dinner",
    "direction", "director", "disaster", "discipline", "discussion", "disease", "disk", "display", "distance", "distribution",
    "district", "document", "dog", "door", "draft", "drama", "drawing", "dream", "dress", "drink",
    "drive", "driver", "duration", "dust", "duty", "earth", "economics", "economy", "edge", "editor",
    "education", "effect", "effort", "election", "elevator", "emotion", "emphasis", "employee", "employer", "employment",
    "energy", "engine", "engineering", "enthusiasm", "environment", "episode", "error", "establishment", "estate", "event",
    "evidence", "exam", "example", "exchange", "excitement", "exercise", "exhibition", "existence", "exit", "experience",
    "experiment", "expert", "explanation", "expression", "extent", "eye", "face", "fact", "factor", "failure",
    "faith", "fall", "family", "farm", "farmer", "fashion", "father", "favorite", "feature", "feedback",
    "feeling", "field", "fight", "figure", "file", "film", "finance", "finding", "finger", "fire",
    "fish", "flight", "floor", "flow", "flower", "focus", "food", "foot", "football", "force",
    "forest", "form", "fortune", "foundation", "frame", "freedom", "friend", "friendship", "front", "fruit",
    "fuel", "function", "fund", "funeral", "future", "gain", "game", "garage", "garden", "garment",
    "gas", "gate", "gathering", "gear", "gene", "general", "generation", "gift", "girl", "glove",
    "goal", "government", "grade", "grandfather", "grandmother", "grass", "growth", "guest", "guidance", "guide",
    "guitar", "habit", "half", "hall", "hand", "handle", "harm", "hat", "head", "health",
    "hearing", "heart", "heat", "height", "hell", "hello", "help", "hero", "highway", "history",
    "home", "honey", "hope", "hospital", "hotel", "house", "housing", "human", "humidity", "humor",
    "hunger", "hunt", "husband", "idea", "identity", "image", "imagination", "impact", "importance", "impression",
    "improvement", "income", "independence", "indication", "individual", "industry", "information", "initiative", "injury", "insect",
    "inside", "inspection", "inspector", "instance", "instruction", "insurance", "intention", "interaction", "interest", "internal",
    "internet", "interview", "introduction", "investment", "issue", "item", "jacket", "job", "joy", "judgment",
    "juice", "jump", "jury", "keeper", "kick", "kid", "kitchen", "knee", "knowledge", "lab",
    "lack", "ladder", "lady", "lake", "language", "laugh", "lawyer", "leader", "leadership", "league",
    "length", "lesson", "letter", "level", "library", "life", "light", "limit", "line", "link",
    "list", "listener", "location", "lock", "loss", "love", "machine", "magazine", "mail", "management",
    "manager", "manner", "manufacturer", "map", "march", "mark", "market", "marketing", "marriage", "material",
    "math", "matter", "meal", "meaning", "measurement", "media", "medicine", "medium", "memory", "menu",
    "message", "metal", "method", "midnight", "milk", "mind", "mine", "minimum", "minute", "mirror",
    "mission", "mistake", "mixture", "mode", "model", "moment", "money", "month", "mood", "morning",
    "mortgage", "mother", "motion", "motor", "mountain", "mouse", "mouth", "movie", "music", "nail",
    "name", "nation", "nature", "negotiation", "network", "news", "night", "noise", "normal", "note",
    "nothing", "notice", "number", "observation", "occasion", "offer", "office", "officer", "oil", "opening",
    "operation", "opinion", "opportunity", "opposition", "orange", "order", "organization", "outcome", "oven", "owner",
    "pace", "painting", "paper", "part", "participant", "passenger", "passion", "patience", "payment", "peace",
    "peak", "pen", "penalty", "people", "performance", "period", "permission", "person", "perspective", "phase",
    "philosophy", "phone", "photo", "phrase", "physics", "piano", "picture", "piece", "pizza", "place",
    "plan", "platform", "player", "point", "poison", "policy", "politics", "population", "position", "possibility",
    "post", "pot", "potato", "power", "practice", "preference", "preparation", "presence", "president", "press",
    "pressure", "price", "pride", "primary", "principle", "printer", "priority", "problem", "process", "produce",
    "product", "profession", "profit", "program", "progress", "project", "promise", "promotion", "proof", "property",
    "proposal", "protection", "psychology", "public", "purpose", "quality", "quantity", "queen", "question", "radio",
    "rain", "range", "rate", "ratio", "reaction", "reader", "reality", "reason", "recipe", "record",
    "reference", "reflection", "region", "relation", "relationship", "replacement", "report", "republic", "reputation", "requirement",
    "research", "reserve", "residence", "resolution", "resource", "response", "responsibility", "restaurant", "result", "revenue",
    "revolution", "reward", "ring", "risk", "river", "road", "role", "roof", "room", "rule",
    "run", "safety", "salad", "salt", "sample", "sand", "scene", "schedule", "school", "science",
    "screen", "search", "season", "secret", "section", "sector", "security", "selection", "sense", "series",
    "service", "session", "setting", "shape", "share", "shelter", "ship", "shirt", "shock", "shoe",
    "shop", "shopping", "shot", "show", "side", "sign", "signal", "signature", "significance", "silence",
    "singer", "sister", "site", "situation", "skill", "sleep", "smile", "society", "software", "solution",
    "son", "song", "sound", "source", "speaker", "specialist", "speech", "speed", "spirit", "sport",
    "spot", "spring", "square", "stage", "stand", "star", "statement", "status", "step", "stock",
    "storage", "story", "strength", "structure", "student", "studio", "study", "style", "subject", "success",
    "suggestion", "summer", "sun", "supermarket", "support", "surgery", "surprise", "survey", "system", "table",
    "tactic", "task", "tax", "tea", "teacher", "team", "technology", "telephone", "television", "temperature",
    "tendency", "tennis", "tension", "term", "test", "text", "thanks", "theater", "theory", "thing",
    "thought", "throat", "ticket", "tie", "time", "title", "tool", "topic", "town", "trade",
    "tradition", "traffic", "train", "trainer", "training", "transportation", "tree", "trouble", "trust", "truth",
    "uncle", "union", "unit", "university", "user", "value", "variety", "vehicle", "version", "video",
    "view", "village", "virus", "visit", "visitor", "voice", "volume", "vote", "waiter", "walk",
    "wall", "war", "warning", "water", "wave", "way", "wealth", "weather", "web", "wedding",
    "week", "weight", "wind", "winner", "winter", "wish", "woman", "wood", "word", "work",
    "worker", "world", "worry", "writer", "writing", "year", "youth", "zone"
];


  var rand = Math.floor(Math.random() * 151);
  console.log(rand);
  var Find = words[rand];
  console.log(Find);
  var count = 0;
  var dmg = 7;

  function drawLine(x1, y1, x2, y2) {
      // Create a new line element
      var line = $('<div class="line"></div>');
      
      // Calculate the length and angle of the line
      var length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      var angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  
      // Apply the line styles
      line.css({
        width: length,
        height: 4, // Make the line a bit thicker for better visibility
        top: y1,
        left: x1,
        transform: 'rotate(' + angle + 'deg)',
        transformOrigin: '0 0'
      });
  
      // Append the line to the container
      $('#container').append(line);
  }

  // Example: Drawing lines
  drawLine(1205, 400, 1205, 200);
  drawLine(1210, 400, 1110, 500);
  drawLine(1210, 400, 1310, 500);
  drawLine(1455, 100, 1455, 600);
  drawLine(1455, 600, 1332, 600);
  drawLine(1577, 600, 1332, 600);
  drawLine(1205, 238, 1205, 100);
  drawLine(1205, 100, 1455, 100);
  drawLine(1205, 300, 1105, 200);
  drawLine(1205, 300, 1305, 200);
  
  // Initially hide the lines
  $('.line').eq(0).css('visibility', "hidden");
  $('.line').eq(1).css('visibility', "hidden");
  $('.line').eq(2).css('visibility', "hidden");
  $('.line').eq(6).css('visibility', "hidden");
  $('.line').eq(8).css('visibility', "hidden");
  $('.line').eq(9).css('visibility', "hidden");
  $('.line').eq(6).css('background-color', '#ff0000'); // Change the 8th line color to red
  $('.guess').text('-'.repeat(Find.length));  // Initialize with dashes
  var count1 = Find.length;
  $('.special').on("click", function() {
    location.reload();
});
  $('.key').on('click', function() {
      found = 0;
      count = -1;
      var keyId = $(this).attr('id');  // Get the id of the clicked key
      var fourthLetter = keyId.charAt(3);  // Get the 4th letter (indexing starts at 0)
      console.log(fourthLetter);

      while (count <= count1) {
          count += 1;
          if (Find[count] === fourthLetter) {
              found = 1;
              console.log("yes", count);
              dmg += 1;
              count = count1 + 1;
              var currentGuess = $('.guess').text();
              var wordLength = Find.length;
              
              for (var i = 0; i < wordLength; i++) {
                  if (Find[i] === fourthLetter) {
                      currentGuess = currentGuess.substring(0, i) + fourthLetter + currentGuess.substring(i + 1);
                  }
              }
              $('.guess').text(currentGuess);
          }
      }

      if (count + 1 > count1) {
          dmg -= 1;
          console.log(dmg);
      }

      // Correct the equality checks
      if (dmg === 6) {
          $('.circle').css('visibility', 'visible');
      }
      if (dmg === 5) {
          $('.line').eq(0).css('visibility', "visible");
      }
      if (dmg === 4) {
          $('.line').eq(1).css('visibility', "visible");
      }
      if (dmg === 3) {
          $('.line').eq(2).css('visibility', "visible");
      }
      if (dmg === 2) {
        $('.line').eq(9).css('visibility', "visible");
      }
      if (dmg === 1) {
          $('.line').eq(8).css('visibility', "visible");
      }
      if (dmg === 0) {
          
          $('.line').eq(6).css('visibility', "visible");
          gameOver = true
          alert("Game over. The word was "+ Find +" .")
          $('.guess').text(Find)
      }
      if (found === 1) {
        $(this).css('background-color', 'green');  // Turn green for correct guess
    } else {
        $(this).css('background-color', 'red');    // Turn red for incorrect guess
    }
    if (!gameOver && !$('.guess').text().includes('-')) {
      alert("You win!");
  }
  });
});
