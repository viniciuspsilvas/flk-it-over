import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import CheckBox from "../ui/check-box";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/button";
import { Text } from "./text";
import { MdMoreVert } from "react-icons/md";

export interface CardProps extends VariantProps<typeof variants> {
  checked?: boolean;
  children?: ReactNode;
  avatar?: string;
  className?: string;
  avatarRounded?: boolean;
  id?: string;
  title?: string | ReactNode;
  content?: string | ReactNode;
  onPrimaryChange?: (id: string, checked: boolean) => void;

  menuOptions?: {
    label: string;
    onClick: () => void;
    startIcon?: ReactNode;
  }[];
}

const itemMenuVariant = {
  hidden: {
    scale: 0.1,
    opacity: 0,
    x: "6vw",
    y: "-5vw"
  },

  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  }
};

const variants = cva(
  "flex items-center p-4 transition duration-300 ease-in-out border-2 hover:bg-basic-800 bg-basic-900 text-white",
  {
    variants: {
      checked: {
        true: "border-primary-800 ",
        false: "border-tertiary-900"
      },
      rounded: {
        true: "rounded-lg",
        false: ""
      },
      elevation: {
        true: "shadow-lg",
        false: ""
      }
    },
    defaultVariants: {
      checked: false
    }
  }
);

const Card: React.FC<CardProps> = ({
  elevation = true,
  rounded = true,
  checked = false,
  children,
  avatar,
  onPrimaryChange,
  id,
  title,
  content,
  className,
  menuOptions
}) => {
  const classes = variants({ checked, rounded, elevation });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className={`${className} ${classes} z-10`}>
        {avatar && (
          <div className={`flex-shrink-0`}>
            <Image
              width={48}
              height={48}
              src={avatar}
              alt={`Avatar ${title || ""}`}
              className={`"h-12 w-12 rounded-full`}
            />
          </div>
        )}

        {(title || content) && (
          <div className={`ml-3 flex flex-col w-full`}>
            {title && <p className="text-lg font-medium">{title}</p>}
            {content && <p className="text-sm text-gray-500">{content}</p>}
          </div>
        )}

        {children && <div className="ml-auto">{children}</div>}

        <div className="flex flex-col justify-center">
          <Text category="label" status="tertiary">
            Primary
          </Text>

          <CheckBox
            type="checkbox"
            onChange={() => {
              id && onPrimaryChange && onPrimaryChange(id, !checked);
            }}
            checked={checked}
            id={`checkbox-list-secondary-label-${id}`}
            className="ml-auto"
          />
        </div>

        {menuOptions && (
          <div className="relative ml-4" ref={menuRef}>
            <Button
              onClick={toggleMenu}
              className="p-0 "
              variant="text"
              intent="basic"
              centerIcon={<MdMoreVert size={20} color="#F2CEA5" />}
            ></Button>

            <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  variants={itemMenuVariant}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  id="dropdown"
                  className={`absolute z-50 bg-tertiary-900 border border-tertiary-600 divide-y divide-tertiary-200 rounded shadow w-44 top-2 right-4`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {menuOptions?.map(
                      ({ label, onClick, startIcon }, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-tertiary-700 hover:text-white"
                            onClick={() => {
                              onClick();
                              toggleMenu();
                            }}
                          >
                            <div className="flex items-center">
                              {startIcon && (
                                <span className="mr-4 shrink-0">
                                  {startIcon}
                                </span>
                              )}
                              {label && <Text status={"none"}>{label}</Text>}
                            </div>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
