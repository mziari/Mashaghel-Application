package team.maz.mashaghel;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("team.maz.mashaghel");

        noClasses()
            .that()
            .resideInAnyPackage("team.maz.mashaghel.service..")
            .or()
            .resideInAnyPackage("team.maz.mashaghel.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..team.maz.mashaghel.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
