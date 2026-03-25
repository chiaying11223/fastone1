// main.js - Fastone.com Interactions WITH Translations

document.addEventListener("DOMContentLoaded", () => {
    // =========================================
    // 0. RICH DATA DICTIONARY FOR GAMES
    // =========================================
    const gameDetails = {
        "LUCKY JAGUAR": {
            logo: "image/Slot_Lucky Jaguar_0.png",
            desc: "進入叢林與美洲豹同行，追尋隱藏的阿茲特克黃金。",
            maxWin: "15,000 X", volatility: "HIGH 🌶️🌶️🌶️🌶️", type: "Slot",
            features: ["● Aztec temple free games", "● Jaguar Roar multiplier", "● Cascading wins mechanism"],
            paylines: "243 WAYS", publishTime: "2024.08",
            gallery: ["image/Slot_Lucky Jaguar_2.png", "image/Slot_Lucky Jaguar_3.png"]
        },
        "MONEY POT": {
            logo: "image/Slot_Money Pot_0.png",
            desc: "滿載金幣的金鍋，轉動即有機會觸發 Jackpot 累積彩金。",
            maxWin: "3,000 X", volatility: "LOW-MED 🌶️🌶️", type: "Slot",
            features: [
                "● 3x3 reels, 3 paylines",
                "● God of Wealth feature",
                "● Lock&Respin"
            ],
            paylines: "3 LINES", publishTime: "2024.10",
            gallery: ["image/Slot_Money Pot_2.png", "image/Slot_Money Pot_3.png"]
        },
        "FORTUNE ZOMBIE": {
            logo: "image/Fish_FORTUNE ZOMBIE_0.png",
            desc: "末日來臨！拿起武器射擊殭屍首領並贏得大獎。",
            maxWin: "5,000 X", volatility: "MEDIUM 🌶️🌶️🌶️", type: "Fishing",
            features: ["● Weapon drops mechanism", "● Kill Boss score multiplier", "● Special laser weapon"],
            paylines: "Not Applicable", publishTime: "2024.09",
            gallery: ["image/Fish_FORTUNE ZOMBIE_2.png", "image/Fish_FORTUNE ZOMBIE_3.png"]
        },
        "ULTIMATE TEXAS HOLD'E": {
            desc: "終極德州撲克。與莊家一對一決戰。",
            maxWin: "500 X", volatility: "MEDIUM 🌶️🌶️🌶️", type: "Card",
            features: ["● 1-on-1 gameplay with dealer", "● Live squint peaking tension", "● Side-bet bonuses payout"],
            paylines: "Not Applicable", publishTime: "2024.11",
            gallery: ["image/Card_Ultimate Texas Hold'e_2.png", "image/Card_Ultimate Texas Hold'e_3.png"]
        },
        "MAGIC LAMP BINGO": {
            desc: "神燈精靈幫助您完成連線！點亮神燈帶走巨額彩金。",
            maxWin: "2,000 X", volatility: "LOW 🌶️", type: "Bingo",
            features: ["● Multi-card synchronous drawing", "● Genie random matching balls", "● Jackpot lighting trigger"],
            paylines: "Multi-lines", publishTime: "2024.12",
            gallery: ["image/Bingo_Magic Lamp Bingo_2.png", "image/Bingo_Magic Lamp Bingo_3.png"]
        }
    };

    // =========================================
    // 1. GAME CATEGORY FILTERS
    // =========================================
    const tabs = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll(".game-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const category = tab.getAttribute("data-category");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                    setTimeout(() => { card.style.opacity = "1"; card.style.transform = "scale(1)"; }, 50);
                } else {
                    card.style.opacity = "0"; card.style.transform = "scale(0.8)";
                    setTimeout(() => { card.style.display = "none"; }, 300);
                }
            });
        });
    });

    // Trigger initial filter on page load (SLOT will be default now)
    const activeTab = document.querySelector(".tab-btn.active");
    if (activeTab) {
        // Run immediately or slight backoff
        activeTab.click();
    }

    // =========================================
    // 2. NAVBAR SCROLL EFFECT
    // =========================================
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.9)";
        }
    });

    // =========================================
    // 3. TRANSLATION DICTIONARY
    // =========================================
    const translations = {
        eng: {
            nav_home: "HOME", nav_company: "COMPANY", nav_games: "GAMES", nav_contact: "CONTACT US",
            hero_badge: "NEW GAME", hero_title: "COIN TREE", hero_max_win: "MAX WIN", hero_volatility: "VOLATILITY",
            hero_desc: "Experience the ultimate speed limit and enjoy victory right at your fingertips.",
            btn_play: "PLAY NOW", btn_details: "DETAILS",
            about_title: "INNOVATIVE MECHANICS, PURSUING EXCELLENCE",
            about_desc: "The Fastone team is dedicated to creating the best and original games (Video Slots, Bingo, Table Games, Fishing, etc.). We insist on excellence and innovation, providing players with fast integration, exciting tournaments, and accumulated jackpots.",
            stat_1: "HTML5 GAMES", stat_2: "TOP CERTIFICATIONS", stat_3: "CURRENCY SUPPORTED", stat_4: "LANGUAGES SUPPORTED",
            games_title: "POPULAR", games_sub: "GAMES",
            cat_all: "ALL", cat_slots: "SLOT", cat_fishing: "FISHING", cat_table: "TABLE & CARD", cat_bingo: "BINGO", cat_casino: "CASINO",
            service_title: "OUR", service_sub: "SERVICES",
            service_t1: "Tournament System", service_p1: "Easily set up and update live tournament events. Drive player interaction, competition, and engagement with real-time leaderboards.",
            service_t2: "Must Hit By Jackpot", service_p2: "Our signature jackpot mechanic guarantees a winner before the jackpot reaches its target — making every spin more thrilling than the last.",
            service_t3: "Linking Jackpot", service_p3: "All players across all operators share a single growing jackpot pool. Collective excitement, bigger prizes, and maximum engagement for every platform.",
            service_t4: "AI & Data Intelligence", service_p4: "Our AI engine analyses player behaviour daily to optimise retention, personalise game recommendations, and surface the right promotions at the right time.",
            btn_login: "LOGIN / REGISTER", footer_links: "QUICK LINKS",
            contact_title: "CONTACT US", contact_sub1: "We're a pretty friendly bunch.", contact_sub2: "Reach out to us and we'll happily answer any questions you may have.", contact_submit: "Submit", contact_email: "jili-service@jiligames.com", contact_interest: "If you are interested in integrating our quality content, Friend our sales on Telegram below"
        },
        cn: {
            nav_home: "首页", nav_company: "公司介绍", nav_games: "游戏选单", nav_contact: "联系我们",
            hero_badge: "新游戏", hero_title: "金币树", hero_max_win: "最大倍数", hero_volatility: "波动率",
            hero_desc: "体验最极速的游戲快感，享受指尖上的胜利。",
            btn_play: "立即畅玩", btn_details: "查看详情",
            about_title: "创新機制，追求卓越",
            about_desc: "Fastone 团队致力于创造最佳且原创的遊戲（影片老虎机、宾果、桌上游戏、捕鱼机等）。我们坚持卓越與创新，為玩家提供快速整合、精彩赛事與累積彩金。",
            stat_1: "百分之百 HTML5", stat_2: "頂級遊戲认证", stat_3: "全球貨幣支援", stat_4: "多国語言支援",
            games_title: "热门", games_sub: "游戏",
            cat_all: "全部", cat_slots: "老虎机", cat_fishing: "捕魚機", cat_table: "桌上與卡牌", cat_bingo: "賓果", cat_casino: "真人視訊",
            service_title: "星級", service_sub: "服務",
            service_t1: "锦标賽系統", service_p1: "輕鬆設置與更新即時錦標賽。透過即時排行榜，推動玩家互動、競爭與參與度。",
            service_t2: "必中彩金 (Must Hit)", service_p2: "獨創彩金機制，保證在達到目標前產生贏家——讓每一次旋轉都比上一次更刺激。",
            service_t3: "連線彩金 (Linking)", service_p3: "所有運營商的玩家共享一個增長中的彩金池。為每個平臺帶來集體興奮、更大獎金和極佳參與度。",
            service_t4: "AI 與數據智能", service_p4: "AI 引擎每日分析玩家行為，優化留存，個性化推薦遊戲，並在正確時間推薦匹配活動。",
            btn_login: "登录 / 注册", footer_links: "快速链接",
            contact_title: "聯絡我們", contact_sub1: "我們的團隊非常友善！", contact_sub2: "隨時與我們聯繫，我們將竭誠為您解答任何疑問。", contact_submit: "送出", contact_email: "jili-service@jiligames.com", contact_interest: "如果您有興趣整合我們優質的遊戲內容，歡迎下方透過 Telegram 聯繫我們的銷售部門",

        }
    };

    // FUNCTION TO UPDATE TEXT
    function translatePage(lang) {
        const translateNodes = document.querySelectorAll("[data-translate]");
        translateNodes.forEach(node => {
            const key = node.getAttribute("data-translate");
            if (translations[lang] && translations[lang][key]) {
                node.innerText = translations[lang][key];
                
                // Special handling for glitch title data-text attribute
                if (node.classList.contains("glitch")) {
                    node.setAttribute("data-text", translations[lang][key]);
                }
            }
        });
    }

    // =========================================
    // 4. LANGUAGE PICKER - CLICK & COMPLETE TRANSLATE
    // =========================================
    const langBtn = document.querySelector(".lang-btn");
    const langItems = document.querySelectorAll(".lang-item");

    langItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); 

            // 1. Get Details and Target Lang
            const selectedText = item.textContent.trim();
            const imgSrc = item.querySelector("img").src;
            const targetLang = item.getAttribute("data-lang"); // 'eng' or 'cn'

            // 2. Update Navbar Button Text & Flag
            langBtn.querySelector("span").innerText = selectedText;
            langBtn.querySelector(".flag-icon").src = imgSrc;

            // 3. Highlight Choice
            langItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // 4. TRIGGER TRANSLATION
            if (translations[targetLang]) {
                translatePage(targetLang);
                // Save Language Persistence
                localStorage.setItem("selectedLanguage", targetLang);
            }
        });
    });

    // =========================================
    // 5. DEMO OVERLAY INTERACTIONS
    // =========================================
    const demoOverlay = document.getElementById("demoOverlay");
    const demoBackBtn = document.getElementById("demoBackBtn");
    const demoStartBtn = document.getElementById("demoStartBtn");
    const demoStartOverlay = document.getElementById("demoStartOverlay");
    const interactiveArea = document.getElementById("interactiveArea");
    const spinBtn = document.getElementById("spinBtn");
    const winMessage = document.getElementById("winMessage");
    const gameFrame = document.getElementById("gameFrame");
    const deviceButtons = document.querySelectorAll(".device-btn");

    // Click "PLAY DEMO" buttons on cards
    const playButtons = document.querySelectorAll(".btn-play");
    
    playButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Get data from game card
            const card = btn.closest(".game-card");
            const title = card.querySelector("h3").innerText.trim().toUpperCase();
            const maxWin = card.querySelector("p").innerText;
            const category = card.getAttribute("data-category") ? card.getAttribute("data-category").toUpperCase() : "SLOTS";
            const imgSrc = card.querySelector("img").src;

            // Populate Overlay Base Info
            const logoEl = document.getElementById("demoGameLogo");
            const titleEl = document.getElementById("demoGameTitle");
            const currentDetail = gameDetails[title];

            if (logoEl) {
                // Use main card thumbnail (Image 1) on the right dashboard
                logoEl.src = imgSrc;
                logoEl.style.display = "block";
            }
            if (titleEl) {
                titleEl.innerText = title;
            }

            if (currentDetail) {
                if (document.getElementById("demoGameMaxWin")) document.getElementById("demoGameMaxWin").innerText = currentDetail.maxWin || "-";
                if (document.getElementById("demoGameVolatility")) document.getElementById("demoGameVolatility").innerHTML = currentDetail.volatility || "-";
                if (document.getElementById("demoGameType")) document.getElementById("demoGameType").innerText = currentDetail.type || "Slot";
                if (document.getElementById("demoSpecs")) {
                    document.getElementById("demoSpecs").innerHTML = currentDetail.features ? currentDetail.features.map(f => `<div style="padding-bottom:3px;">${f}</div>`).join("") : "-";
                }
                if (document.getElementById("demoPaylines")) document.getElementById("demoPaylines").innerText = currentDetail.paylines || "-";
                if (document.getElementById("demoPublishTime")) document.getElementById("demoPublishTime").innerText = currentDetail.publishTime || "-";
            }

            if (document.getElementById("demoGameTitleFrame")) document.getElementById("demoGameTitleFrame").innerText = title;
            if (document.getElementById("demoGameBanner")) document.getElementById("demoGameBanner").src = imgSrc;
            if (document.getElementById("demoGameThumb")) document.getElementById("demoGameThumb").src = imgSrc;

            // Rich Data lookup
            const data = gameDetails[title];
            if (data) {
                if (document.getElementById("demoSpecs")) document.getElementById("demoSpecs").innerHTML = data.specs;
                if (document.getElementById("demoPaylines")) document.getElementById("demoPaylines").innerText = data.paylines || "-";
                if (document.getElementById("demoGameDesc")) document.getElementById("demoGameDesc").innerText = data.desc;
                
                // Dynamic Gallery Populate
                const galleryGrid = document.querySelector(".gallery-grid");
                if (galleryGrid && data.gallery) {
                    // Update global hook
                    if (window.setLightboxGallery) window.setLightboxGallery(data.gallery);
                    
                    galleryGrid.innerHTML = data.gallery.map((img, index) => `
                        <div class="gallery-item" onclick="if(window.openLightbox) window.openLightbox(${index})"><img src="${img}" alt="Gameplay Screen"></div>
                    `).join("");
                }
            } else {
                if (document.getElementById("demoGameDesc")) document.getElementById("demoGameDesc").innerText = "經驗極速快感，享受遊戲勝利。";
            }

            // Reset Sub-views
            if (demoStartOverlay) demoStartOverlay.style.display = "flex";
            if (interactiveArea) interactiveArea.style.display = "none";
            if (winMessage) winMessage.innerText = "";

            // Show Overlay
            if (demoOverlay) {
                demoOverlay.classList.add("active");
                document.body.style.overflow = "hidden"; 
            }
        });
    });

    // Frame Fullscreen Toggle
    const frameFsBtn = document.getElementById("frameFsBtn");
    if (frameFsBtn && gameFrame) {
        frameFsBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent interactive mechanics if any
            gameFrame.classList.toggle("fullscreen-frame");
        });
    }

    // Close Demo
    if (demoBackBtn) {
        demoBackBtn.addEventListener("click", () => {
            if (gameFrame) gameFrame.classList.remove("fullscreen-frame"); // Reset on close
            demoOverlay.classList.remove("active");
            document.body.style.overflow = "auto"; 
        });
    }

    // Start Interactive Mode
    if (demoStartBtn) {
        demoStartBtn.addEventListener("click", () => {
            if (demoStartOverlay) demoStartOverlay.style.display = "none";
            if (interactiveArea) interactiveArea.style.display = "flex";
        });
    }

    // Device Previews Switch
    if (deviceButtons && gameFrame) {
        deviceButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                deviceButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const view = btn.getAttribute("data-view");
                gameFrame.className = "game-frame"; // reset
                if (view !== "desktop") {
                    gameFrame.classList.add(`view-${view}`);
                }
            });
        });
    }

    // Simple Interactive Spin Mechanism (Slot Style)
    const emojis = ["🍒", "🍋", "🔔", "⭐", "💎", "7️⃣"];
    let spinning = false;

    if (spinBtn) {
        spinBtn.addEventListener("click", () => {
            if (spinning) return;
            spinning = true;
            if (winMessage) winMessage.innerText = "Spinning...";
            
            const reels = [document.getElementById("reel1"), document.getElementById("reel2"), document.getElementById("reel3")];
            
            // Mock interval animation
            const spinInterval = setInterval(() => {
                reels.forEach(reel => {
                    if (reel) reel.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                });
            }, 100);

            setTimeout(() => {
                clearInterval(spinInterval);
                spinning = false;

                // Final random values
                const r1 = emojis[Math.floor(Math.random() * emojis.length)];
                const r2 = emojis[Math.floor(Math.random() * emojis.length)];
                const r3 = emojis[Math.floor(Math.random() * emojis.length)];
                
                if (reels[0]) reels[0].innerText = r1;
                if (reels[1]) reels[1].innerText = r2;
                if (reels[2]) reels[2].innerText = r3;

                if (winMessage) {
                    if (r1 === r2 && r2 === r3) {
                        winMessage.innerText = "BIG WIN! 🎉";
                    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
                        winMessage.innerText = "Small Win! 👍";
                    } else {
                        winMessage.innerText = "Try again!";
                    }
                }
            }, 1500);
        });
    }

    // =========================================
    // 6. NAVBAR & LOGO FUNCTIONALITY
    // =========================================
    const navItems = document.querySelectorAll(".nav-links a");
    const logoLink = document.querySelector(".logo");
    const closeDemoSafe = () => {
        const overlay = document.getElementById("demoOverlay");
        if (overlay && overlay.classList.contains("active")) {
            if (document.getElementById("gameFrame")) document.getElementById("gameFrame").classList.remove("fullscreen-frame");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    };

    if (logoLink) {
        logoLink.style.cursor = "pointer";
        logoLink.addEventListener("click", () => {
            closeDemoSafe();
            if (window.location.pathname.includes("games_b.html")) {
                window.location.href = "index_b.html";
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    navItems.forEach(nav => {
        nav.addEventListener("click", () => {
             closeDemoSafe();
        });
    });

    // =========================================
    // 7. LIGHTBOX CONTROLLER
    // =========================================
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    let currentGallery = [];
    let currentImgIndex = 0;

    const openLightbox = (index) => {
        if (!currentGallery || currentGallery.length === 0) return;
        currentImgIndex = index;
        if (lightboxImg) lightboxImg.src = currentGallery[currentImgIndex];
        if (lightbox) lightbox.classList.add("active");
    };

    if (closeLightbox) {
        closeLightbox.addEventListener("click", () => lightbox.classList.remove("active"));
    }
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
             if (e.target === lightbox) lightbox.classList.remove("active");
        });
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", (e) => {
            e.stopPropagation();
            currentImgIndex = (currentImgIndex - 1 + currentGallery.length) % currentGallery.length;
            if (lightboxImg) lightboxImg.src = currentGallery[currentImgIndex];
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", (e) => {
            e.stopPropagation();
            currentImgIndex = (currentImgIndex + 1) % currentGallery.length;
            if (lightboxImg) lightboxImg.src = currentGallery[currentImgIndex];
        });
    }

    // =========================================
    // 8. INITIAL LOAD / TRANSLATION RESTORE
    // =========================================
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && translations[savedLang]) {
        translatePage(savedLang);
        
        // Update Navbar Button to match saved lang
        const langBtn = document.querySelector(".lang-btn");
        const targetItem = Array.from(document.querySelectorAll(".lang-item")).find(i => i.getAttribute("data-lang") === savedLang);
        if (langBtn && targetItem) {
            const img = targetItem.querySelector("img").src;
            langBtn.querySelector("span").innerText = targetItem.textContent.trim();
            langBtn.querySelector(".flag-icon").src = img;
            document.querySelectorAll(".lang-item").forEach(i => i.classList.remove("active"));
            targetItem.classList.add("active");
        }
    }

    // Global hook for dynamic updates
    window.setLightboxGallery = (gallery) => {
        currentGallery = gallery || [];
    };

    // Fix Scoping: Attach directly to window index
    window.openLightbox = (index) => {
        if (!currentGallery || currentGallery.length === 0) return;
        currentImgIndex = index;
        if (lightboxImg) lightboxImg.src = currentGallery[currentImgIndex];
        if (lightbox) lightbox.classList.add("active");
    };

});

