import React, { useState } from "react";
import styles from "../styles/FilterButton.module.css";
import { ChevronDown} from "lucide-react";

interface FilterOption {
  label: string;
  icon: React.ElementType;
}

interface FilterButtonProps {
  title: string;
  options: FilterOption[];
}

const FilterButton: React.FC<FilterButtonProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption>(options[0]);

  const handleSelect = (option: FilterOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button className={styles.filterButton} onClick={() => setIsOpen(true)}>
        <selectedOption.icon size={20} />
        <span>{selectedOption.label}</span>
        <ChevronDown size={20} />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index} onClick={() => handleSelect(option)}>
                  <option.icon size={24} />
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
