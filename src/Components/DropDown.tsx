import React, { useEffect } from "react";  
import MenuItem from "@mui/material/MenuItem";  
import FormControl from "@mui/material/FormControl";  
import Select, { SelectChangeEvent } from "@mui/material/Select";  
  
export interface DropDownItem {  
  id: string;  
  name: string;  
}  
  
const DropDown: React.FC<{  
  items: DropDownItem[] | null;  
  disabled?: boolean;  
  minWidth?: number;  
  onChange?(data: DropDownItem): void;  
  id?: string;  
  value?: string | null;  
  InputProps?: React.CSSProperties;  
}> = ({  
  items,  
  disabled = false,  
  onChange,  
  id,  
  value,  
  InputProps,  
  minWidth = 300,  
}) => {  
  const [select, setSelect] = React.useState<string>("");  
  
  useEffect(() => {  
    if (items && items.length > 0 && value) {  
      const selectedItem = items.find((item) => item.id === value);  
      if (selectedItem) {  
        setSelect(selectedItem.id);  
      } else {  
        setSelect("");  
      }  
    } else if (items && items.length > 0) {  
      // 初期値が指定されていない場合、最初の項目を選択  
      setSelect(items[0].id);  
      if (onChange) {  
        onChange(items[0]);  
      }  
    }  
  }, [items, value, onChange]);  
  
  const handleChange = (event: SelectChangeEvent<string>) => {  
    const selectedId = event.target.value;  
    if (items && onChange) {  
      const selectedItem = items.find((item) => item.id === selectedId);  
      if (selectedItem) {  
        onChange(selectedItem);  
      }  
    }  
    setSelect(selectedId);  
  };  
  
  if (!items) return null;  
  
  return (  
    <FormControl style={{ minWidth: minWidth }} variant="outlined">  
      <Select  
        labelId="select-label"  
        id={id}  
        value={select}  
        disabled={disabled}  
        onChange={handleChange}  
        style={InputProps}  
      >  
        {items.map((item) => (  
          <MenuItem key={item.id} value={item.id} style={{ fontSize: "21px" }}>  
            {item.name}  
          </MenuItem>  
        ))}  
      </Select>  
    </FormControl>  
  );  
};  
  
export default DropDown;  
