# 📈 AI Stock | 專業級 AI 股票戰術指揮中心

這是一款結合 **Google Gemini 2.0**、**OpenAI** 與 **Claude** 頂尖模型的 AI 股票數據可視化應用程式。專為重視技術分析與趨勢判斷的投資者設計，提供精確的進/出場建議與深度新聞情緒分析。

## ✨ 核心特色
- **三時段分層戰術規劃 (Strategic Timelines)**：獨家實作 **「近期、中期、遠期」** 三階段策略頁籤。AI 自動生成針對不同持股週期的「進場區間、勝率預測、精準止損、目標獲利」。
- **基本面量化核心指標 (Quant Badges)**：自動抓取並呈現 **本益比 (P/E)、股東權益報酬率 (ROE)、營收成長率**、分析師目標價等核心財報指標。
- **混合型數據補足系統 (Hybrid Data Sourcing)**：採用 **Yahoo Finance v10/v7 雙向備援**，並在數據缺失時自動啟動 **AI 聯網搜尋 (Google Search Tool)** 補齊指標，確保 100% 數據填充率。
- **專業級量化指揮中心 UI**：垂直整合新聞情緒、技術分析與財報亮點。具備「動態趨勢背景 Icon」與「固定寬度戰術側邊欄」，提供極致穩定的終端體驗。
- **高效能 K 線圖表**：採用 `lightweight-charts` (Canvas)，支撐流暢縮放。內建 MA5/20、EMA12/26、布林通道、RSI、KD、MACD 等專業指標。
- **數據持久化紀錄**：透過 **IndexedDB** 在本地安全存儲分析報告。
- **多國語系 (i18n)**：完美適配 **繁體中文 (`zh-TW`)** 與 **英文 (`en-US`)**。

## 🛠️ 技術棧
- **Frontend**: React 19 + TypeScript + Vite 6
- **Styling**: **Tailwind CSS 4** + Motion (Framer Motion 12)
- **Charting**: Lightweight Charts
- **Data Proxy**: 內建 Vercel Edge Proxy 配置，解決 Yahoo Finance CORS 限制。
- **Storage**: IndexedDB (Local persistence)

## 🚀 快速啟動

1.  **安裝依賴**：
    ```bash
    npm install
    ```
2.  **啟動開發環境**：
    ```bash
    npm run dev
    ```
3.  **配置 AI**：
    在點擊開始按鈕後的 **Onboarding 頁面** 直接輸入您的 API Key。支援：
    - Gemini (Google AI Studio)
    - ChatGPT (OpenAI)
    - Claude (Anthropic)

## 📂 專案結構
- `src/api/`：AI 模型互動 (`ai.ts`) 與數據代理抓取 (`yahoo.ts`)。
- `src/pages/`：包含戰術詳情頁 (`DetailScreen`) 與引導頁 (`OnboardingScreen`)。
- `src/components/`：模組化 UI 組件。
- `src/utils/`：技術指標運算與 IndexedDB 管理。
- `vercel.json`：雲端部署代理設定。

## 🌐 部署
本專案已完美優化 **Vercel** 部署：
1. 推送代碼至 GitHub。
2. 在 Vercel 導入專案（自動讀取 `vercel.json`）。
3. 即刻享受個人專屬的 AI 股票分析站。
