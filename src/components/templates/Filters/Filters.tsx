import { IButtonProps, Button, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export const Filters = ({ title, isActive = false, type, ...rest }: Props) => {
  return (
    <Button variant="outline">
      <Text>
        {title}
      </Text>

    </Button>
  );
}