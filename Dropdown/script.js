const dropdownList = [
    ["Core",
        ["Genre", "Primary Genre", "Secondary Genre", ["Compatable Games"]],
        ["Target Experience", ["Emotional Goals"], ["Replayablilty Goals"]],
        ["Other", ["Platform"], ["scope"]]
    ],

    ["Player",
        "Who are they?",
        "Power ramp",
        ["Character", ["Movement"], ["Fighting"], ["Controls"]]
    ],

    ["Game Loop",
        "Ending",
        "Main Loop",
        ["Secondary Loops"]
    ],

    ["World",
        "World scale",
        ["World Types"],
        ["World Rules"],
        ["Enviromental Identiy", ["Landmarks"], ["Biomes"], ["Hazards"], ["Traversal Conditions"]]
        ["Other", "Destructible?", "Persistent changes?", "NPC Memory?", "Faction control Shifts?", "Economy Changes?", "Weather Affects Gameplay?"]
    ],

    ["Delivery Methods",
        ["Dialogs"],
        ["Cutscenes"],
        ["Logs Or Journals"],
        ["Enviromental Clues"],
        ["Radio Or Transmissions"],
        ["NPC Behaviors"],
        ["UI Narrative"]
    ],

    ["Story",
        "Story Structure",
        ["Story Layers", ["Main story"], ["Side Stories"], ["Character Arcs"], "World Lore", "Hidden Lore"],
        ["Choices", ["Moral Stories"], ["Tactical Stories"], ["Faction Stories"], ["NPC stories"], ["Ending Variations"], ["Hidden Consequences"]],
    ],

    ["Characters And Factions",
        ["Player", "Name", "Visual Identity", "Backstory", "Motivation", "Starting Limitations"],
        ["NPC types", ["Merchants"], ["Quest Givers"], ["Allies"], ["Rivals"], ["Mentors"], ["Neutral Civillians"], ["Enemies Disguised NPCs"]],
        ["Factions", ["Governments"], ["Rebels"], ["Guilds"], ["Corporations"], ["Cults"], ["Monsters Or Hive Minds"], ["Mercinarys"]],
    ],

    ["Mechanics",
        ["Movement"],
        ["Interactions"],
        ["Rescource Systems"],
        ["Failure States"],
        ["System Interactions"]
    ]
];

const container = document.getElementById("dropdownContainer");
const selectedText = document.getElementById("selectedText");

buildArrayMenu(dropdownList, container);

function buildArrayMenu(data, parentElement) {
  data.forEach(entry => {
    if (typeof entry === "string") {
      const option = document.createElement("button");
      option.className = "menu-item leaf";
      option.textContent = entry;

      option.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedText.textContent = "Selected: " + entry;
      });

      parentElement.appendChild(option);

    } else if (Array.isArray(entry) && entry.length > 0) {
      const submenuName = entry[0];
      const submenuItems = entry.slice(1);

      const menuWrapper = document.createElement("div");
      menuWrapper.className = "menu";

      const submenuButton = document.createElement("button");
      submenuButton.className = "menu-item";
      submenuButton.textContent = "[+] " + submenuName;

      const submenu = document.createElement("div");
      submenu.className = "submenu";

      submenuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        menuWrapper.classList.toggle("open");

        if (menuWrapper.classList.contains("open")) {
          submenuButton.textContent = "[-] " + submenuName;
        } else {
          submenuButton.textContent = "[+] " + submenuName;
        }
      });

      buildArrayMenu(submenuItems, submenu);

      menuWrapper.appendChild(submenuButton);
      menuWrapper.appendChild(submenu);
      parentElement.appendChild(menuWrapper);
    }
  });
}