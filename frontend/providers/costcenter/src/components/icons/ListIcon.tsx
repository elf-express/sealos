import { Icon, IconProps } from '@chakra-ui/react';

export default function ListIcon(props: IconProps) {
  return (
    <Icon
      width="24"
      height="24"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16.9999C3.71667 16.9999 3.47917 16.904 3.2875 16.7124C3.09583 16.5207 3 16.2832 3 15.9999C3 15.7165 3.09583 15.479 3.2875 15.2874C3.47917 15.0957 3.71667 14.9999 4 14.9999C4.28333 14.9999 4.52083 15.0957 4.7125 15.2874C4.90417 15.479 5 15.7165 5 15.9999C5 16.2832 4.90417 16.5207 4.7125 16.7124C4.52083 16.904 4.28333 16.9999 4 16.9999ZM4 12.9999C3.71667 12.9999 3.47917 12.904 3.2875 12.7124C3.09583 12.5207 3 12.2832 3 11.9999C3 11.7165 3.09583 11.479 3.2875 11.2874C3.47917 11.0957 3.71667 10.9999 4 10.9999C4.28333 10.9999 4.52083 11.0957 4.7125 11.2874C4.90417 11.479 5 11.7165 5 11.9999C5 12.2832 4.90417 12.5207 4.7125 12.7124C4.52083 12.904 4.28333 12.9999 4 12.9999ZM4 8.99988C3.71667 8.99988 3.47917 8.90404 3.2875 8.71238C3.09583 8.52071 3 8.28321 3 7.99988C3 7.71654 3.09583 7.47904 3.2875 7.28738C3.47917 7.09571 3.71667 6.99988 4 6.99988C4.28333 6.99988 4.52083 7.09571 4.7125 7.28738C4.90417 7.47904 5 7.71654 5 7.99988C5 8.28321 4.90417 8.52071 4.7125 8.71238C4.52083 8.90404 4.28333 8.99988 4 8.99988ZM7 16.9999V14.9999H21V16.9999H7ZM7 12.9999V10.9999H21V12.9999H7ZM7 8.99988V6.99988H21V8.99988H7Z"
        fill="#1C1B1F"
      />
    </Icon>
  );
}