import './style.css'
import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";

const modelId = 'anthropic.claude-v2';
const prompt = "Give me an affirmation to boost my motivation today, referencing plants, animals, or flowers by adding emoji. Don't show the prompt, only the quote. Do not add anything like Here is an affirmation... just return the affirmation alone";
const conversation = [
  {
    role: "user",
    content: [{ text: prompt }],
  },
];