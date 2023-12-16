package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: БюдСтрои
 */
@Entity(name = "IISNovyjj1БюдСтрои")
@Table(schema = "public", name = "БюдСтрои")
public class ByudStroi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Длите")
    private Integer длите;

    @Column(name = "НачРаб")
    private Date начраб;

    @Column(name = "Объем")
    private Float объем;

    @Column(name = "СтоимИто")
    private Float стоимито;

    @Column(name = "БазСт")
    private Float базст;

    @Column(name = "ОкоРаб")
    private Date окораб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmer")
    @Convert("EdIzmer")
    @Column(name = "ЕдИзмер", length = 16, unique = true, nullable = false)
    private UUID _edizmerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmer", insertable = false, updatable = false)
    private EdIzmer edizmer;


    public ByudStroi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getДлите() {
      return длите;
    }

    public void setДлите(Integer длите) {
      this.длите = длите;
    }

    public Date getНачРаб() {
      return начраб;
    }

    public void setНачРаб(Date начраб) {
      this.начраб = начраб;
    }

    public Float getОбъем() {
      return объем;
    }

    public void setОбъем(Float объем) {
      this.объем = объем;
    }

    public Float getСтоимИто() {
      return стоимито;
    }

    public void setСтоимИто(Float стоимито) {
      this.стоимито = стоимито;
    }

    public Float getБазСт() {
      return базст;
    }

    public void setБазСт(Float базст) {
      this.базст = базст;
    }

    public Date getОкоРаб() {
      return окораб;
    }

    public void setОкоРаб(Date окораб) {
      this.окораб = окораб;
    }


}