import { useState } from "react";
import styles from "./styles.module.css";
import Tags from "../Tags";

interface InputTagsProps {
  title: string;
  limit: number;
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder?: string;
}

const InputTags: React.FC<InputTagsProps> = ({
  title,
  limit,
  placeholder,
  tags,
  setTags,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("I entered here con key ", e.key);
    if (e.key === "Enter" && inputValue.trim() !== "" && tags.length < limit) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{title}</label>
      <span
        className={styles.help}
      >{`Presiona enter para agregar (Max: ${limit})`}</span>
      <input
        disabled={tags.length >= limit}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <Tags tags={tags} deleteTag={handleRemoveTag} bubbleColor="#3bc277" />
    </div>
  );
};

export default InputTags;
