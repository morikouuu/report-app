import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
	const [date, setDate] = useState("");
	const [learning, setLearning] = useState("");
	const [understand, setUnderstand] = useState("");
	const [noIdea, setNoIdea] = useState("");
	const [thoughts, setThoughts] = useState("");
	const [questions, setQuestions] = useState("");

	const template = (
		date: string,
		learning: string,
		understand: string,
		noIdea: string,
		thoughts: string,
		questions: string,
	) =>
		`# 日報${date}

## 今日やったこと
${learning || "- "}

## わかったこと
${understand || "- "}

## わからなかったこと
${noIdea || "- "}

## 感想
${thoughts || "- "}

## 質問
${questions || "- "}`;

	return (
		<div className="app">
			<h1>Report App</h1>
			<div className="editor-layout">
				<div className="panel">
					<h2>入力</h2>
					<div className="form">
						<label>
							日付
							<input
								type="text"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								placeholder="例: 2026/04/21"
							/>
						</label>

						<label>
							今日やったこと
							<textarea
								value={learning}
								onChange={(e) => setLearning(e.target.value)}
								placeholder="例: Javaの講義"
							/>
						</label>
						<label>
							わかったこと
							<textarea
								value={understand}
								onChange={(e) => setUnderstand(e.target.value)}
								placeholder="例: Spring Bootの使い方"
							/>
						</label>
						<label>
							わからなかったこと
							<textarea
								value={noIdea}
								onChange={(e) => setNoIdea(e.target.value)}
								placeholder="例: 実装に時間がかかった点"
							/>
						</label>

						<label>
							感想
							<textarea
								value={thoughts}
								onChange={(e) => setThoughts(e.target.value)}
								placeholder="例: useEffectの依存配列の扱いを理解"
							/>
						</label>

						<label>
							質問
							<textarea
								value={questions}
								onChange={(e) => setQuestions(e.target.value)}
								placeholder="例: API設計のベストプラクティス"
							/>
						</label>
					</div>
				</div>
				<div className="panel">
					<h2>プレビュー</h2>
					<div className="preview">
						<ReactMarkdown>
							{template(
								date,
								learning,
								understand,
								noIdea,
								thoughts,
								questions,
							)}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
