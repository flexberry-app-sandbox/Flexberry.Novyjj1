package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

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

    @Column(name = "Объем")
    private Float объем;

    @Column(name = "НачРаб")
    private Date начраб;

    @Column(name = "ОкоРаб")
    private Date окораб;

    @Column(name = "Длите")
    private Integer длите;

    @Column(name = "БазСт")
    private Float базст;

    @Column(name = "СтоимИто")
    private Float стоимито;


    public ByudStroi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбъем() {
      return объем;
    }

    public void setОбъем(Float объем) {
      this.объем = объем;
    }

    public Date getНачРаб() {
      return начраб;
    }

    public void setНачРаб(Date начраб) {
      this.начраб = начраб;
    }

    public Date getОкоРаб() {
      return окораб;
    }

    public void setОкоРаб(Date окораб) {
      this.окораб = окораб;
    }

    public Integer getДлите() {
      return длите;
    }

    public void setДлите(Integer длите) {
      this.длите = длите;
    }

    public Float getБазСт() {
      return базст;
    }

    public void setБазСт(Float базст) {
      this.базст = базст;
    }

    public Float getСтоимИто() {
      return стоимито;
    }

    public void setСтоимИто(Float стоимито) {
      this.стоимито = стоимито;
    }


}