// 摄影爱好者手机网页JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 手机导航切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切换图标
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // 点击链接时关闭菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
    
    // 加入按钮动画
    const joinButton = document.getElementById('joinButton');
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            joinButton.textContent = '正在加入...';
            joinButton.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                joinButton.textContent = '成功加入!';
                joinButton.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    joinButton.textContent = '加入我们';
                    joinButton.style.backgroundColor = '#ff6b6b';
                }, 2000);
            }, 1000);
            
            // 滚动到作品展示区
            document.getElementById('gallery').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // 画廊轮播功能
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentGalleryIndex = 0;
    
    if (prevBtn && nextBtn && galleryItems.length > 0) {
        prevBtn.addEventListener('click', function() {
            galleryItems[currentGalleryIndex].style.display = 'none';
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
            galleryItems[currentGalleryIndex].style.display = 'block';
            
            // 添加动画
            galleryItems[currentGalleryIndex].style.animation = 'slideInLeft 0.5s ease-out';
        });
        
        nextBtn.addEventListener('click', function() {
            galleryItems[currentGalleryIndex].style.display = 'none';
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
            galleryItems[currentGalleryIndex].style.display = 'block';
            
            // 添加动画
            galleryItems[currentGalleryIndex].style.animation = 'slideInRight 0.5s ease-out';
        });
        
        // 初始化显示第一个项目
        galleryItems.forEach((item, index) => {
            if (index === 0) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // 查看全部作品按钮
    const viewGalleryButton = document.getElementById('viewGalleryButton');
    if (viewGalleryButton) {
        viewGalleryButton.addEventListener('click', function() {
            // 显示所有画廊项目
            galleryItems.forEach(item => {
                item.style.display = 'block';
            });
            
            // 隐藏轮播按钮
            if (prevBtn && nextBtn) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
            
            viewGalleryButton.textContent = '已显示全部';
            viewGalleryButton.style.backgroundColor = '#6c5ce7';
            
            setTimeout(() => {
                viewGalleryButton.textContent = '查看全部作品';
                viewGalleryButton.style.backgroundColor = '#ff6b6b';
            }, 2000);
        });
    }
    
    // 社区按钮交互
    const communityButtons = document.querySelectorAll('.community-btn');
    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
            button.textContent = '正在处理...';
            button.style.backgroundColor = '#6c5ce7';
            
            setTimeout(() => {
                button.textContent = '处理完成';
                button.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    button.textContent = buttonText;
                    button.style.backgroundColor = '#ff6b6b';
                }, 2000);
            }, 1000);
        });
    });
    
    // 平滑滚动导航链接
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新活跃导航链接
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                // 关闭手机菜单
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.querySelector('i').className = 'fas fa-bars';
                }
            }
        });
    });
    
    // 触摸友好卡片动画
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    const gearCards = document.querySelectorAll('.gear-card');
    
    tutorialCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    gearCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 添加手机滑动功能（仅适用于手机）
    const heroSection = document.querySelector('.hero');
    if (heroSection && window.innerWidth <= 768) {
        let touchStartX = 0;
        
        heroSection.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        });
        
        heroSection.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;
            
            if (Math.abs(deltaX) > 50) {
                // 检测滑动
                if (deltaX > 0) {
                    // 向右滑动 - 回到上一个区域
                    console.log('向右滑动');
                    document.getElementById('home').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // 向左滑动 - 前往下一个区域
                    console.log('向左滑动');
                    document.getElementById('gallery').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 为手机添加微动画
                if (window.innerWidth <= 768) {
                    entry.target.style.animation = 'slideUp 0.5s ease-out';
                }
            }
        });
    }, observerOptions);
    
    // 观察各区域添加动画
    document.querySelectorAll('.gallery, .tutorials, .gear, .community').forEach(section => {
        observer.observe(section);
    });
    
    // 输出手机设备信息
    console.log('摄影爱好者手机网页加载完成');
    console.log('屏幕尺寸:', window.innerWidth, 'x', window.innerHeight);
    console.log('触摸支持:', 'ontouchstart' in window);
    
    // 添加CSS动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: NA;
                transform: translateX(0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .visible {
            animation: slideUp 0.5s ease-out;
        }
        
        @keyframes bounceIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .photo-item {
            animation: bounceIn 0.5s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // 添加photo-item延迟动画
    setTimeout(() => {
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'bounceIn 0.5s ease-out';
            }, index * 200);
        });
    }, 1000);
});