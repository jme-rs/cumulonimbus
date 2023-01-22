import javax.swing.*;
import java.awt.event.*;
import java.awt.*;

public class Test2 {
    public static void main(String[] args) {

        MyFrame frame = new MyFrame();


        MyTextFeild field = new MyTextFeild();
        MyButton button = new MyButton();
        button.initButtonEvent(frame, field);

        frame.add(new MyLabel());
        frame.add(field);
        frame.add(button);

        frame.pack();
        frame.changeLook();
        frame.setVisible(true);
    }
}


class MyFrame extends JFrame {

    MyFrame() {
        super("swing");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout());
    }

    void changeLook() {
        try {
            UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
            SwingUtilities.updateComponentTreeUI(this);
        }
        catch (Exception e) {
        }
    }
}


class MyLabel extends JLabel { 

    MyLabel() {
        super("Input word:");
        setFont(new Font("Arial", Font.PLAIN, 16));
    }
}


class MyTextFeild extends JTextField {

    MyTextFeild() {
        super("Hello World!", 20);
        setFont(new Font("Arial", Font.PLAIN, 16));
    }
}


class MyButton extends JButton {

    MyButton() {
        super("show dialog");
        setSize(50, 20);
        setFont(new Font("Arial", Font.PLAIN, 16));
    }

    void initButtonEvent(JFrame frame, JTextField field) {
        addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                JDialog dialog = new JDialog(frame, "dialog", true);
                dialog.setLocationRelativeTo(null);
                dialog.setMinimumSize(new Dimension(400, 300));;
                dialog.setLayout(new FlowLayout());

                JLabel label = new JLabel(field.getText());
                label.setFont(new Font("Arial", Font.PLAIN, 16));
                dialog.add(label);
                dialog.pack();
                dialog.setVisible(true);
            }
        });
    }
}
