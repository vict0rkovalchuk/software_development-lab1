# software_development-lab1

1. Application description:

   - Quadratic Equation Solver

2. How to assemble and run a project(instruction):

   - go to repo (https://github.com/vict0rkovalchuk/software_development-lab1);
   - clone it locally;
   - after you should start the server(for example Live Server in Visual Studio Code launching from index.html strictly);
   - there you will see two versions of implementations (interactive and nointeractive). You should click the button you want to see how it works.

!!! You just can follow the link to see the same without cloning it to yourself: https://vict0rkovalchuk.github.io/software_development-lab1/

3.  Description non-interactive mode:

    In this mode program accepts only one argument - the way to file which contains coefficients of the equation. That is a file named as test_valid.txt. It contains three numbers: a, b and c separated by a space. A dot is expected as a decimal symbol. After the last coefficient - the symbol of the new line and the file ends there.

    When working in non-interactive mode, the program reads the file, outputs the equation and its roots to standard output:

        $ ./equation test_valid.txt
        Equation is: (1.0) x^2 + (0.0) x + (0.0) = 0
        There are 1 roots x1 = 0

    If the file does not match the specified format, the program outputs an error message to standard output and crash with a non-zero output code:

        $ ./equation test_zero.txt
        Error. a cannot be 0
        $ ./equation test_invalid.txt
        invalid file format
        $ ./equation /i/do/not/exist
        file /i/do/not/exist does not exist

    !!! In notinteractive.js file you can see two lines: one of them is commented out, the other isn't:

            if (!/\d\s\d\s\d\r\n$/.test(allText)) {
            if (!/\d\s\d\s\d\s$/.test(allText)) {

        The first one is the default. The second one was created for github deploying. It's because while saving, all empty lines cuts out and template with argument in test_valid.txt file ruins out.

        In other cases you should use the first of the commented out lines.

4.  Revert commit

    - https://github.com/vict0rkovalchuk/software_development-lab1/commit/8b558284449fad50bfb8018f7194d50bb9ed06b5
