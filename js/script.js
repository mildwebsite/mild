// Global variable for video autoplay function
let triggerHeroVideoAutoPlay = null;

// Function to handle scroll and animate decorative elements
function initScrollAnimation() {
    const heroSection = document.querySelector('.hero-section');
    const heroContainer = document.querySelector('.hero-container');
    const phoneTarget = document.querySelector('.phones-container')
        || document.querySelector('.phone-frame.active')
        || document.querySelector('.phone-frame')
        || document.querySelector('.phone-mockup');
    
    // Elements by rows
    const row1 = [
        document.querySelector('.hero-decor-1'), // Garlic
        document.querySelector('.hero-decor-3')  // Pepper
    ];
    
    const row2 = [
        document.querySelector('.hero-decor-2'), // Olive oil
        document.querySelector('.hero-decor-4')  // Cheese
    ];
    
    const row3 = [
        document.querySelector('.hero-decor-5'), // Pasta
        document.querySelector('.hero-decor-6')  // Zucchini
    ];
    
    if (!heroSection || !heroContainer || !phoneTarget) return;
    
    // Calculate phone center and apply offsets for all elements
    function calculateAndApplyOffsets() {
        const phoneRect = phoneTarget.getBoundingClientRect();
        const containerRect = heroContainer.getBoundingClientRect();

        if (window.matchMedia('(max-width: 768px)').matches) {
            const heroDescription = heroContainer.querySelector('.hero-description');
            if (heroDescription) {
                const descRect = heroDescription.getBoundingClientRect();
                const descTop = descRect.top - containerRect.top;
                const descBottom = descRect.bottom - containerRect.top;

                const imageHeight = 72; 
                const row1Top = Math.round(descTop - imageHeight - 10);
                
                // Row 2 (olives and cheese) 6px below description text end
                const row2Top = Math.round(descBottom - 30);
                const rowGap = 72; // for row 3
                const row3Top = row2Top + rowGap;

                heroContainer.style.setProperty('--decor-row1-top', `${row1Top}px`);
                heroContainer.style.setProperty('--decor-row2-top', `${row2Top}px`);
                heroContainer.style.setProperty('--decor-row3-top', `${row3Top}px`);

                // Cascade by width: row 2 narrower by 20%, row 3 by another 20%.
                const base = 20;
                const span = Math.max(0, containerRect.width - base * 2);
                const inset2 = Math.round(span * 0.10); // narrow by 20% => 10% from each side
                const inset3 = Math.round(span * 0.20); // another 20% => 20% from each side

                heroContainer.style.setProperty('--decor-inset-1', `0px`);
                heroContainer.style.setProperty('--decor-inset-2', `${inset2}px`);
                heroContainer.style.setProperty('--decor-inset-3', `${inset3}px`);
            }
        }
        
        // Phone center relative to container
        const phoneCenterX = phoneRect.left - containerRect.left + phoneRect.width / 2;
        const phoneCenterY = phoneRect.top - containerRect.top + phoneRect.height / 2;
        
        // Apply offsets to all elements
        const allElements = [...row1, ...row2, ...row3];
        
        allElements.forEach((el) => {
            if (!el) return;
            
            const elRect = el.getBoundingClientRect();
            
            // Current element center relative to container
            const elCenterX = elRect.left - containerRect.left + elRect.width / 2;
            const elCenterY = elRect.top - containerRect.top + elRect.height / 2;
            
            // Offset to phone center
            const offsetX = phoneCenterX - elCenterX;
            const offsetY = phoneCenterY - elCenterY;
            
            // Apply via CSS variables
            el.style.setProperty('--target-x', `${offsetX}px`);
            el.style.setProperty('--target-y', `${offsetY}px`);
        });
    }
    
    // Call on load and resize
    calculateAndApplyOffsets();
    window.addEventListener('resize', calculateAndApplyOffsets);
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroSectionTop = heroSection.offsetTop;
        const heroSectionHeight = heroSection.offsetHeight;
        const scrollProgress = scrollTop - heroSectionTop;
        
        // Calculate relative scroll progress (0-1)
        const maxScroll = heroSectionHeight;
        const scrollRatio = Math.max(0, Math.min(1, scrollProgress / maxScroll));
        
        // Check if we are within hero-section bounds
        if (scrollProgress < 0 || scrollProgress > heroSectionHeight) {
            // If outside section, reset all classes
            [...row1, ...row2, ...row3].forEach(el => {
                if (el) el.classList.remove('hide-behind-phone');
            });
            return;
        }
        
        // Scroll thresholds for each row
        const threshold1 = 0.01; // 1% section scroll
        const threshold2 = 0.05; // 5% section scroll
        const threshold3 = 0.10; // 10% section scroll
        
        // Row 1: Garlic and Pepper - hide first
        if (scrollRatio >= threshold1) {
            row1.forEach(el => {
                if (el) el.classList.add('hide-behind-phone');
            });
        } else {
            row1.forEach(el => {
                if (el) el.classList.remove('hide-behind-phone');
            });
        }
        
        // Row 2: Olive oil and Cheese - hide second
        if (scrollRatio >= threshold2) {
            row2.forEach(el => {
                if (el) el.classList.add('hide-behind-phone');
            });
        } else {
            row2.forEach(el => {
                if (el) el.classList.remove('hide-behind-phone');
            });
        }
        
        // Row 3: Pasta and Zucchini - hide last
        if (scrollRatio >= threshold3) {
            row3.forEach(el => {
                if (el) el.classList.add('hide-behind-phone');
            });
            // Autoplay first video when row3 hides
            if (triggerHeroVideoAutoPlay) {
                triggerHeroVideoAutoPlay();
            }
        } else {
            row3.forEach(el => {
                if (el) el.classList.remove('hide-behind-phone');
            });
        }
    }
    
    // Use requestAnimationFrame for smooth animation
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Call immediately for initial state
    handleScroll();
}

// Function to switch tabs and animate phones
function initTabSwitcher() {
    const tabs = document.querySelectorAll('.hero-tab');
    const phones = document.querySelectorAll('.phone-slide');
    const phonesContainer = document.querySelector('.phones-container');
    
    if (!tabs.length || !phones.length) return;
    
    let isAnimating = false;
    const tabOrder = ['voice', 'snap', 'text'];
    
    // Check if mobile version
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }
    
    // Initialize: set first tab active if none is active
    function initializeActiveTab() {
        const activeTab = Array.from(tabs).find(t => t.classList.contains('active'));
        const activePhone = Array.from(phones).find(p => p.classList.contains('active'));
        
        if (!activeTab) {
            // Default to 'snap' tab
            const defaultTab = Array.from(tabs).find(t => t.getAttribute('data-tab') === 'snap') || tabs[0];
            if (defaultTab) {
                defaultTab.classList.add('active');
                defaultTab.setAttribute('data-state', 'active');
            }
        }
        
        if (!activePhone) {
            // Activate corresponding phone
            const activeTabName = (Array.from(tabs).find(t => t.classList.contains('active')) || {}).getAttribute('data-tab') || 'snap';
            const defaultPhone = Array.from(phones).find(p => p.getAttribute('data-tab') === activeTabName);
            if (defaultPhone) {
                defaultPhone.classList.add('active');
            }
        }
        
        // On mobile: scroll to active phone
        if (isMobile() && phonesContainer) {
            const activeTabName = (Array.from(tabs).find(t => t.classList.contains('active')) || {}).getAttribute('data-tab') || 'snap';
            const targetPhone = Array.from(phones).find(p => p.getAttribute('data-tab') === activeTabName);
            
            if (targetPhone) {
                setTimeout(() => {
                    const scrollLeft = targetPhone.offsetLeft - phonesContainer.offsetLeft - (phonesContainer.offsetWidth / 2) + (targetPhone.offsetWidth / 2);
                    phonesContainer.scrollTo({
                        left: scrollLeft,
                        behavior: 'auto'
                    });
                    
                    phones.forEach(p => p.classList.remove('active'));
                    targetPhone.classList.add('active');
                    
                    if (window.updatePhonesOpacity) {
                        window.updatePhonesOpacity();
                    }
                }, 100);
            }
        }
    }
    
    // Get active phone index based on scroll (for mobile)
    function getActivePhoneIndexFromScroll() {
        if (!isMobile() || !phonesContainer) return -1;
        
        const containerRect = phonesContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        phones.forEach((phone, index) => {
            const phoneRect = phone.getBoundingClientRect();
            const phoneCenter = phoneRect.left + phoneRect.width / 2;
            const distance = Math.abs(phoneCenter - containerCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        return closestIndex;
    }
    
    // Update active tab based on active phone
    function updateActiveTabFromPhone() {
        if (!isMobile()) return;
        
        const activeIndex = getActivePhoneIndexFromScroll();
        if (activeIndex === -1) return;
        
        const activePhone = phones[activeIndex];
        if (!activePhone) return;
        
        const activeTabName = activePhone.getAttribute('data-tab');
        const activeTab = Array.from(tabs).find(t => t.getAttribute('data-tab') === activeTabName);
        
        if (activeTab && !activeTab.classList.contains('active')) {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('data-state', 'default');
            });
            
            activeTab.classList.add('active');
            activeTab.setAttribute('data-state', 'active');
            
            if (window.playActiveTabVideo) {
                window.playActiveTabVideo();
            }
        }
    }
    
    // Function to switch to specific tab
    function switchToTab(tabName) {
        if (isAnimating) return;
        
        const targetTab = Array.from(tabs).find(t => t.getAttribute('data-tab') === tabName);
        if (!targetTab) return;
        
        const currentActiveTab = Array.from(tabs).find(t => t.classList.contains('active'));
        if (currentActiveTab && currentActiveTab.getAttribute('data-tab') === tabName) return;
        
        isAnimating = true;
        
        tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('data-state', 'default');
        });
        
        const targetPhone = document.querySelector(`.phone-slide[data-tab="${tabName}"]`);
        
        if (isMobile() && phonesContainer && targetPhone) {
            const scrollLeft = targetPhone.offsetLeft - phonesContainer.offsetLeft - (phonesContainer.offsetWidth / 2) + (targetPhone.offsetWidth / 2);
            
            phonesContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            
            phones.forEach(p => p.classList.remove('active'));
            targetPhone.classList.add('active');
            
            setTimeout(() => {
                if (window.updatePhonesOpacity) {
                    window.updatePhonesOpacity();
                }
            }, 100);
            
            setTimeout(() => {
                targetTab.classList.add('active');
                targetTab.setAttribute('data-state', 'active');
                
                if (window.playActiveTabVideo) {
                    window.playActiveTabVideo();
                }
                isAnimating = false;
            }, 250);
        } else {
            // Desktop transition
            const currentActivePhone = document.querySelector('.phone-slide.active');
            
            if (currentActivePhone && targetPhone && currentActivePhone !== targetPhone) {
                phones.forEach(p => {
                    p.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
                });
                
                targetPhone.classList.remove('active');
                
                const currentIndex = tabOrder.indexOf(currentActivePhone.getAttribute('data-tab'));
                const targetIndex = tabOrder.indexOf(tabName);
                
                if (targetIndex > currentIndex) {
                    currentActivePhone.classList.remove('active');
                    currentActivePhone.classList.add('slide-out-left');
                    targetPhone.classList.add('slide-in-right');
                } else {
                    currentActivePhone.classList.remove('active');
                    currentActivePhone.classList.add('slide-out-right');
                    targetPhone.classList.add('slide-in-left');
                }
                
                setTimeout(() => {
                    if (targetIndex > currentIndex) {
                        targetPhone.classList.remove('slide-in-right');
                    } else {
                        targetPhone.classList.remove('slide-in-left');
                    }
                    targetPhone.classList.add('active');
                }, 30);
                
                setTimeout(() => {
                    if (targetIndex > currentIndex) {
                        currentActivePhone.classList.remove('slide-out-left');
                    } else {
                        currentActivePhone.classList.remove('slide-out-right');
                    }
                    
                    targetTab.classList.add('active');
                    targetTab.setAttribute('data-state', 'active');
                    
                    isAnimating = false;
                    if (window.playActiveTabVideo) {
                        window.playActiveTabVideo();
                    }
                }, 320);
            } else {
                isAnimating = false;
            }
        }
    }
    
    // Play video for the active tab globally
    window.playActiveTabVideo = function() {
        const allPhones = document.querySelectorAll('.phone-slide');
        const container = document.querySelector('.phones-container');
        const isMobileView = window.matchMedia('(max-width: 768px)').matches;
        
        let activePhone;
        
        if (isMobileView && container && allPhones.length > 0) {
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            allPhones.forEach((phone, index) => {
                const phoneRect = phone.getBoundingClientRect();
                const phoneCenter = phoneRect.left + phoneRect.width / 2;
                const distance = Math.abs(phoneCenter - containerCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            if (allPhones[closestIndex]) {
                activePhone = allPhones[closestIndex];
            }
        } else {
            activePhone = document.querySelector('.phone-slide.active');
        }
        
        if (!activePhone) return;
        
        const activeVideo = activePhone.querySelector('.hero-frame-video');
        const allHeroVideos = document.querySelectorAll('.hero-frame-video');
        
        if (activeVideo && allHeroVideos.length > 0) {
            allHeroVideos.forEach(video => {
                if (video !== activeVideo) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
            
            activeVideo.play().catch(() => {
            });
            
            const activePreloader = activePhone.querySelector('.video-preloader');
            if (activePreloader && activeVideo.readyState < 2) {
                setTimeout(() => {
                    if (activeVideo.readyState < 2 && !activePreloader.classList.contains('active')) {
                        activePreloader.classList.add('active');
                    }
                }, 200);
            }
        }
    };
    
    // Tab click handlers
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchToTab(tabName);
        });
    });
    
    // Smooth phone opacity change based on scroll distance from center
    function updatePhonesOpacity() {
        if (!isMobile() || !phonesContainer) return;
        
        const containerRect = phonesContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const containerWidth = containerRect.width;
        
        const fadeThreshold = containerWidth * 0.35;
        
        phones.forEach((phone) => {
            const phoneRect = phone.getBoundingClientRect();
            const phoneCenter = phoneRect.left + phoneRect.width / 2;
            
            const distance = Math.abs(phoneCenter - containerCenter);
            let normalizedDistance = Math.min(1, distance / fadeThreshold);
            
            let opacity = 1 - normalizedDistance;
            opacity = opacity * opacity * opacity; 
            opacity = Math.max(0, Math.min(1, opacity));
            
            phone.style.opacity = opacity;
        });
    }
    
    window.updatePhonesOpacity = updatePhonesOpacity;
    
    // Scroll handler for instant tab sync (mobile only)
    if (phonesContainer && isMobile()) {
        let scrollAnimationFrame = null;
        
        phonesContainer.addEventListener('scroll', () => {
            if (scrollAnimationFrame) {
                cancelAnimationFrame(scrollAnimationFrame);
            }
            scrollAnimationFrame = requestAnimationFrame(() => {
                updatePhonesOpacity();
                updateActiveTabFromPhone();
            });
        }, { passive: true });
        
        setTimeout(() => {
            updatePhonesOpacity();
        }, 150);
    }
    
    // Desktop swipe handlers
    if (phonesContainer && !isMobile()) {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        const minSwipeDistance = 50; 
        
        phonesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        phonesContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeDistanceX = touchEndX - touchStartX;
            const swipeDistanceY = touchEndY - touchStartY;
            
            if (Math.abs(swipeDistanceY) > Math.abs(swipeDistanceX)) return;
            if (Math.abs(swipeDistanceX) < minSwipeDistance) return;
            
            const activeTab = Array.from(tabs).find(t => t.classList.contains('active'));
            if (!activeTab) return;
            
            const currentTabName = activeTab.getAttribute('data-tab');
            const currentIndex = tabOrder.indexOf(currentTabName);
            
            if (currentIndex === -1) return;
            
            if (swipeDistanceX > 0) {
                if (currentIndex > 0) {
                    const prevIndex = currentIndex - 1;
                    switchToTab(tabOrder[prevIndex]);
                }
            } else {
                if (currentIndex < tabOrder.length - 1) {
                    const nextIndex = currentIndex + 1;
                    switchToTab(tabOrder[nextIndex]);
                }
            }
        }
    }
    
    initializeActiveTab();
    initHeroVideoControl();
}

// Control video in hero section
function initHeroVideoControl() {
    const heroVideos = document.querySelectorAll('.hero-frame-video');
    let hasAutoPlayed = false;
    
    triggerHeroVideoAutoPlay = function() {
        if (hasAutoPlayed) return;
        hasAutoPlayed = true;
        
        const activePhone = document.querySelector('.phone-slide.active');
        if (!activePhone) return;
        
        const activeVideo = activePhone.querySelector('.hero-frame-video');
        if (!activeVideo) return;
        
        heroVideos.forEach(video => {
            if (video !== activeVideo) {
                video.pause();
                video.currentTime = 0;
            }
        });
        
        function attemptPlay() {
            if (activeVideo.readyState >= 2) { 
                if (!activeVideo.muted) {
                    activeVideo.muted = true;
                }
                activeVideo.setAttribute('playsinline', '');
                
                activeVideo.play().then(() => {
                    setTimeout(() => {
                        if (activeVideo.paused) {
                            document.addEventListener('touchstart', function retryPlay() {
                                activeVideo.play().catch(() => {});
                                document.removeEventListener('touchstart', retryPlay);
                            }, { once: true });
                        }
                    }, 100);
                }).catch(() => {
                    setTimeout(() => {
                        activeVideo.play().catch(() => {});
                    }, 500);
                });
            } else {
                activeVideo.addEventListener('canplay', attemptPlay, { once: true });
                activeVideo.load();
            }
        }
        
        attemptPlay();
    };
    
    heroVideos.forEach(video => {
        video.addEventListener('loadeddata', () => {
            video.currentTime = 0;
            video.pause();
        });
    });
}

// Handle feature video hover
function initVideoHover() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card) => {
        const video = card.querySelector('.phone-video:not(.hero-phone-video)');
        const description = card.querySelector('.feature-description');
        
        if (!video || !description) return;
        
        video.addEventListener('loadeddata', () => {
            video.currentTime = 0;
            video.pause();
        });
        
        const preloader = card.querySelector('.video-preloader');
        
        card.addEventListener('mouseenter', () => {
            if (video.readyState < 2 && preloader) {
                preloader.classList.add('active');
            }
            
            const handleLoaded = () => {
                if (video.readyState >= 2 && preloader) {
                    preloader.classList.remove('active');
                }
            };
            
            video.addEventListener('canplay', handleLoaded, { once: true });
            video.addEventListener('loadeddata', handleLoaded, { once: true });
            video.addEventListener('loadedmetadata', handleLoaded, { once: true });
            
            video.play().then(() => {
                if (preloader && video.readyState >= 2) {
                    preloader.classList.remove('active');
                }
            }).catch(() => {});
            
            description.style.opacity = '0';
            description.style.visibility = 'hidden';
        });
        
        card.addEventListener('mouseleave', () => {
            video.pause();
            description.style.opacity = '1';
            description.style.visibility = 'visible';
        });
    });
}

// Features carousel control
function initFeaturesCarousel() {
    const wrapper = document.querySelector('.features-carousel-wrapper');
    const slides = document.querySelectorAll('.features-grid .feature-card');
    const dots = document.querySelectorAll('.features-dots .feature-dot');

    if (!wrapper || !slides.length || !dots.length) return;

    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    }

    function getActiveSlideIndex() {
        if (!isMobile()) return 0;
        
        const wrapperRect = wrapper.getBoundingClientRect();
        const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        slides.forEach((slide, index) => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const distance = Math.abs(slideCenter - wrapperCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        return closestIndex;
    }

    function goToIndex(index) {
        if (!isMobile()) return;
        
        const targetIndex = Math.max(0, Math.min(slides.length - 1, index));
        const targetSlide = slides[targetIndex];
        
        if (targetSlide) {
            wrapper.scrollTo({
                left: targetSlide.offsetLeft - wrapper.offsetLeft,
                behavior: 'smooth'
            });
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = Number(dot.getAttribute('data-index'));
            if (!Number.isNaN(index)) {
                goToIndex(index);
                setTimeout(() => {
                    playVideoForActiveSlide();
                }, 400);
            }
        });
    });

    let currentPlayingVideo = null;
    
    function playVideoForActiveSlide() {
        if (!isMobile()) return;
        
        const activeIndex = getActiveSlideIndex();
        const activeSlide = slides[activeIndex];
        
        if (!activeSlide) return;
        
        slides.forEach((slide, index) => {
            if (index !== activeIndex) {
                const video = slide.querySelector('.phone-video:not(.hero-phone-video)');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
        
        const video = activeSlide.querySelector('.phone-video:not(.hero-phone-video)');
        if (!video) return;
        
        if (currentPlayingVideo !== activeSlide) {
            const preloader = activeSlide.querySelector('.video-preloader');
            
            function attemptPlay() {
                if (video.readyState >= 2) { 
                    if (!video.muted) {
                        video.muted = true;
                    }
                    video.setAttribute('playsinline', '');
                    
                    if (preloader) {
                        preloader.classList.remove('active');
                    }
                    
                    video.play().then(() => {
                        setTimeout(() => {
                            if (!video.paused) {
                                currentPlayingVideo = activeSlide;
                            }
                        }, 100);
                    }).catch(() => {
                        setTimeout(() => {
                            video.play().then(() => {
                                currentPlayingVideo = activeSlide;
                            }).catch(() => {});
                        }, 500);
                    });
                } else {
                    if (preloader) {
                        preloader.classList.add('active');
                    }
                    
                    const handleLoaded = () => {
                        if (video.readyState >= 2) {
                            if (preloader) {
                                preloader.classList.remove('active');
                            }
                            attemptPlay();
                        }
                    };
                    
                    video.addEventListener('canplay', handleLoaded, { once: true });
                    video.addEventListener('loadeddata', handleLoaded, { once: true });
                    video.addEventListener('loadedmetadata', handleLoaded, { once: true });
                    
                    const checkInterval = setInterval(() => {
                        if (video.readyState >= 2) {
                            clearInterval(checkInterval);
                            handleLoaded();
                        }
                    }, 100);
                    
                    setTimeout(() => clearInterval(checkInterval), 10000);
                    video.load();
                }
            }
            
            attemptPlay();
        }
    }

    // Sync dots on scroll seamlessly
    let featuresScrollFrame = null;
    let videoPlayTimeout = null;

    wrapper.addEventListener('scroll', () => {
        if (!isMobile()) return;
        
        if (featuresScrollFrame) cancelAnimationFrame(featuresScrollFrame);
        featuresScrollFrame = requestAnimationFrame(() => {
            const activeIndex = getActiveSlideIndex();
            updateDots(activeIndex);

            clearTimeout(videoPlayTimeout);
            videoPlayTimeout = setTimeout(() => {
                playVideoForActiveSlide();
            }, 100);
        });
    }, { passive: true });

    if (isMobile()) {
        updateDots(0);
        const firstSlide = slides[0];
        if (firstSlide) {
            const firstVideo = firstSlide.querySelector('.phone-video:not(.hero-phone-video)');
            const firstPreloader = firstSlide.querySelector('.video-preloader');
            if (firstVideo && firstPreloader) {
                if (firstVideo.readyState < 2) {
                    firstPreloader.classList.add('active');
                }
            }
        }
        setTimeout(() => {
            playVideoForActiveSlide();
        }, 300);
    }
}

// Video Preloaders
function initVideoPreloaders() {
    const phoneVideos = document.querySelectorAll('.hero-frame-video, .phone-video');
    
    phoneVideos.forEach(video => {
        const preloader = video.parentElement.querySelector('.video-preloader');
        if (!preloader) return;
        
        let showTimer = null;
        let isLoaded = false;
        let isError = false;
        
        function hidePreloader() {
            if (showTimer) {
                clearTimeout(showTimer);
                showTimer = null;
            }
            preloader.classList.remove('active');
            isLoaded = true;
        }
        
        function showPreloader() {
            if (isLoaded || isError) return;
            preloader.classList.add('active');
        }
        
        function resetPreloader() {
            if (showTimer) {
                clearTimeout(showTimer);
                showTimer = null;
            }
            isLoaded = false;
            isError = false;
            preloader.classList.remove('active');
        }
        
        const handleLoaded = () => hidePreloader();
        
        const handleError = () => {
            isError = true;
            hidePreloader();
        };
        
        video.addEventListener('loadeddata', handleLoaded);
        video.addEventListener('canplay', handleLoaded);
        video.addEventListener('loadedmetadata', handleLoaded);
        video.addEventListener('error', handleError);
        
        if (video.readyState >= 2) {
            hidePreloader();
        } else {
            showPreloader();
        }
        
        const source = video.querySelector('source');
        if (source) {
            const observer = new MutationObserver(() => {
                resetPreloader();
                if (video.readyState < 2) showPreloader();
            });
            observer.observe(source, { attributes: true, attributeFilter: ['src'] });
        }
        
        const videoObserver = new MutationObserver(() => {
            resetPreloader();
            if (video.readyState < 2) showPreloader();
        });
        
        videoObserver.observe(video, { attributes: true, attributeFilter: ['src'] });
    });
}

// Initialization
let didInit = false;
function initAll() {
    if (didInit) return;
    didInit = true;
    initScrollAnimation();
    initTabSwitcher();
    initVideoHover();
    initFeaturesCarousel();
    initHeroVideoControl();
    initVideoPreloaders();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
    initAll();
}